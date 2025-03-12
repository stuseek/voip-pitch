import React, {useState} from 'react';
import {Calendar, Users, CheckSquare, Clock, DollarSign, GitBranch, ArrowRight, Cloud, Server} from 'lucide-react';
import {teamMemberCost} from './SlideEight/MetricUtils';

const SlideNine = ({nodeData, selectedConfig}) => {
    const [selectedTab, setSelectedTab] = useState('mvp');
    const [selectedVariant, setSelectedVariant] = useState('cloud');

    // Calculate team hours for a specific implementation variant
    const calculateTeamHours = (variant, implementationType) => {
        // Default empty hours object
        const emptyHours = {
            devops: 0,
            qa: 0,
            manager: 0,
            backend: 0,
            ml_engineer: 0
        };

        if (!nodeData) return emptyHours;

        // Find component configurations based on variant
        const getComponentByVariant = (category) => {
            if (!nodeData[category]) return null;

            if (variant === 'cloud') {
                return nodeData[category].find(item => item.type === 'cloud') || null;
            } else if (variant === 'on-prem') {
                return nodeData[category].find(item => item.type === 'on-prem') || null;
            } else if (variant === 'hybrid-media') {
                // For hybrid-media, use on-prem for STT/TTS, cloud for others
                if (category === 'stt' || category === 'tts') {
                    return nodeData[category].find(item => item.type === 'on-prem') || null;
                } else {
                    return nodeData[category].find(item => item.type === 'cloud') || null;
                }
            } else if (variant === 'hybrid-llm') {
                // For hybrid-llm, use on-prem for LLM, cloud for others
                if (category === 'llm') {
                    return nodeData[category].find(item => item.type === 'on-prem') || null;
                } else {
                    return nodeData[category].find(item => item.type === 'cloud') || null;
                }
            }
            return null;
        };

        const telephony = getComponentByVariant('telephony');
        const stt = getComponentByVariant('stt');
        const llm = getComponentByVariant('llm');
        const tts = getComponentByVariant('tts');

        const components = [telephony, stt, llm, tts].filter(Boolean);

        // Sum up hours from all components
        const result = {...emptyHours};

        components.forEach(component => {
            const hours = component[implementationType];
            if (hours) {
                Object.entries(hours).forEach(([role, hourCount]) => {
                    result[role] += hourCount;
                });
            }
        });

        return result;
    };

    // Calculate total cost from team hours
    const calculateCost = (teamHours) => {
        if (!teamHours) return 0;

        return Object.entries(teamHours).reduce((total, [role, hours]) => {
            return total + (hours * teamMemberCost[role]);
        }, 0);
    };

    // Calculate monthly operational costs for a variant
    const calculateMonthlyOperationalCost = (variant) => {
        if (!nodeData) return 0;

        const getComponentByVariant = (category) => {
            if (!nodeData[category]) return null;

            if (variant === 'cloud') {
                return nodeData[category].find(item => item.type === 'cloud') || null;
            } else if (variant === 'on-prem') {
                return nodeData[category].find(item => item.type === 'on-prem') || null;
            } else if (variant === 'hybrid-media') {
                if (category === 'stt' || category === 'tts') {
                    return nodeData[category].find(item => item.type === 'on-prem') || null;
                } else {
                    return nodeData[category].find(item => item.type === 'cloud') || null;
                }
            } else if (variant === 'hybrid-llm') {
                if (category === 'llm') {
                    return nodeData[category].find(item => item.type === 'on-prem') || null;
                } else {
                    return nodeData[category].find(item => item.type === 'cloud') || null;
                }
            }
            return null;
        };

        const telephony = getComponentByVariant('telephony');
        const stt = getComponentByVariant('stt');
        const llm = getComponentByVariant('llm');
        const tts = getComponentByVariant('tts');

        const components = [telephony, stt, llm, tts].filter(Boolean);

        // Calculate per-minute cost
        const costPerMin = components.reduce((sum, component) => {
            return sum + (component?.cost_per_conversation_min || 0);
        }, 0);

        // Calculate annual support cost (divided by 12 for monthly)
        const annualSupportCost = components.reduce((sum, component) => {
            return sum + (component?.annual_support_cost || 0);
        }, 0);

        // Assume 8 hours per day, 30 days per month
        const usageMinutes = 8 * 60 * 30;
        const monthlyCost = (costPerMin * usageMinutes) + (annualSupportCost / 12);

        return monthlyCost;
    };

    // Get team hours for the selected variant and implementation type
    const teamHours = calculateTeamHours(selectedVariant, selectedTab === 'mvp' ? 'mvp_cost' : 'full_implementation_cost');

    // Calculate total hours
    const totalHours = Object.values(teamHours).reduce((sum, hours) => sum + hours, 0);

    // Calculate implementation cost
    const implementationCost = calculateCost(teamHours);

    // Calculate monthly operational cost
    const monthlyOperationalCost = calculateMonthlyOperationalCost(selectedVariant);

    // Implementation duration (weeks) - rough estimate based on total hours
    const implementationWeeks = Math.ceil(totalHours / (selectedTab === 'mvp' ? 120 : 160));

    // Format role name for display
    const formatRoleName = (role) => {
        if (role === 'ml_engineer') return 'ML Engineer';
        if (role === 'devops') return 'DevOps';
        if (role === 'qa') return 'QA Engineer';
        if (role === 'manager') return 'Project Manager';
        if (role === 'backend') return 'Backend Dev';
        return role.charAt(0).toUpperCase() + role.slice(1);
    };

    // Common tasks for each implementation type and role
    const commonTasks = {
        mvp: {
            devops: [
                "Set up basic CI/CD pipeline",
                "Configure development environments",
                "Deploy MVP to staging environment"
            ],
            qa: [
                "Develop basic test cases",
                "Perform manual testing of conversation flows",
                "Document critical bugs and issues"
            ],
            manager: [
                "Define MVP scope and requirements",
                "Coordinate team efforts",
                "Manage stakeholder expectations"
            ],
            backend: [
                "Implement core APIs and services",
                "Set up basic data storage",
                "Create conversation handling logic"
            ],
            ml_engineer: [
                "Configure selected AI models",
                "Create basic prompts for LLM",
                "Tune initial voice parameters"
            ]
        },
        full: {
            devops: [
                "Implement robust monitoring and alerting",
                "Optimize CI/CD for production",
                "Set up redundancy and high availability",
                "Create disaster recovery plans",
                "Implement security hardening"
            ],
            qa: [
                "Develop automated test suite",
                "Perform comprehensive edge case testing",
                "Design and execute load testing",
                "Create QA metrics and reporting",
                "Implement conversation quality evaluation"
            ],
            manager: [
                "Develop detailed project plan",
                "Manage resource allocation",
                "Track progress against milestones",
                "Coordinate with other teams/departments",
                "Plan post-launch support structure"
            ],
            backend: [
                "Implement advanced integrations",
                "Optimize system performance",
                "Build sophisticated conversation flows",
                "Implement analytics and reporting",
                "Create admin and management interfaces"
            ],
            ml_engineer: [
                "Fine-tune AI models for domain-specific knowledge",
                "Implement conversation memory and context",
                "Optimize voice synthesis for natural flow",
                "Design fallback strategies for AI components",
                "Integrate with existing knowledge bases"
            ]
        }
    };

    return (
        <div className="p-8 space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Implementation
                    Planning</h2>
                <p className="text-slate-500 max-w-3xl mx-auto">Comparing various implementation strategies, team
                    compositions, and development roadmaps</p>
            </div>

            {/* Variant Selection */}
            <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200">
                <h3 className="text-lg font-semibold mb-4">Select Implementation Variant</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <button
                        className={`p-4 rounded-lg border-2 flex flex-col items-center transition-all ${
                            selectedVariant === 'cloud'
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-slate-200 hover:border-blue-200 hover:bg-blue-50'
                        }`}
                        onClick={() => setSelectedVariant('cloud')}
                    >
                        <div
                            className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                            <Cloud size={24}/>
                        </div>
                        <h4 className="font-medium">Full Cloud</h4>
                        <p className="text-xs text-slate-500 mt-1 text-center">All components hosted in the cloud</p>
                    </button>

                    <button
                        className={`p-4 rounded-lg border-2 flex flex-col items-center transition-all ${
                            selectedVariant === 'on-prem'
                                ? 'border-green-500 bg-green-50'
                                : 'border-slate-200 hover:border-green-200 hover:bg-green-50'
                        }`}
                        onClick={() => setSelectedVariant('on-prem')}
                    >
                        <div
                            className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                            <Server size={24}/>
                        </div>
                        <h4 className="font-medium">Full On-Premises</h4>
                        <p className="text-xs text-slate-500 mt-1 text-center">All components hosted on your servers</p>
                    </button>

                    <button
                        className={`p-4 rounded-lg border-2 flex flex-col items-center transition-all ${
                            selectedVariant === 'hybrid-media'
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-slate-200 hover:border-purple-200 hover:bg-purple-50'
                        }`}
                        onClick={() => setSelectedVariant('hybrid-media')}
                    >
                        <div
                            className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2">
                            <GitBranch size={24}/>
                        </div>
                        <h4 className="font-medium">Hybrid (Media)</h4>
                        <p className="text-xs text-slate-500 mt-1 text-center">STT & TTS on-prem, other components in
                            cloud</p>
                    </button>

                    <button
                        className={`p-4 rounded-lg border-2 flex flex-col items-center transition-all ${
                            selectedVariant === 'hybrid-llm'
                                ? 'border-amber-500 bg-amber-50'
                                : 'border-slate-200 hover:border-amber-200 hover:bg-amber-50'
                        }`}
                        onClick={() => setSelectedVariant('hybrid-llm')}
                    >
                        <div
                            className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-2">
                            <GitBranch size={24}/>
                        </div>
                        <h4 className="font-medium">Hybrid (LLM)</h4>
                        <p className="text-xs text-slate-500 mt-1 text-center">LLM on-prem, other components in
                            cloud</p>
                    </button>
                </div>
            </div>

            {/* Implementation Type Tabs */}
            <div className="flex mb-6 border-b border-slate-200">
                <button
                    className={`py-3 px-6 font-medium ${
                        selectedTab === 'mvp'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-slate-600 hover:text-blue-600'
                    }`}
                    onClick={() => setSelectedTab('mvp')}
                >
                    MVP Implementation
                </button>
                <button
                    className={`py-3 px-6 font-medium ${
                        selectedTab === 'full'
                            ? 'text-blue-600 border-b-2 border-blue-600'
                            : 'text-slate-600 hover:text-blue-600'
                    }`}
                    onClick={() => setSelectedTab('full')}
                >
                    Full Implementation
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Team & Cost Info */}
                <div className="space-y-6">
                    {/* Implementation Overview */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                        <h3 className="text-xl font-semibold mb-4">
                            {selectedTab === 'mvp' ? 'MVP Implementation' : 'Full Implementation'} Overview
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <Clock size={18} className="text-slate-600 mr-2"/>
                                    <h4 className="font-medium text-slate-700">Duration</h4>
                                </div>
                                <p className="text-2xl font-bold text-slate-800">{implementationWeeks} weeks</p>
                                <p className="text-sm text-slate-500">Estimated timeline</p>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <Users size={18} className="text-slate-600 mr-2"/>
                                    <h4 className="font-medium text-slate-700">Team Size</h4>
                                </div>
                                <p className="text-2xl font-bold text-slate-800">
                                    {Object.values(teamHours).filter(h => h > 0).length} roles
                                </p>
                                <p className="text-sm text-slate-500">{totalHours} total hours</p>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <DollarSign size={18} className="text-slate-600 mr-2"/>
                                    <h4 className="font-medium text-slate-700">Implementation Cost</h4>
                                </div>
                                <p className="text-2xl font-bold text-slate-800">${Math.round(implementationCost).toLocaleString()}</p>
                                <p className="text-sm text-slate-500">One-time cost</p>
                            </div>

                            <div className="p-4 bg-slate-50 rounded-lg">
                                <div className="flex items-center mb-2">
                                    <Calendar size={18} className="text-slate-600 mr-2"/>
                                    <h4 className="font-medium text-slate-700">Monthly Operations</h4>
                                </div>
                                <p className="text-2xl font-bold text-slate-800">${Math.round(monthlyOperationalCost).toLocaleString()}</p>
                                <p className="text-sm text-slate-500">Ongoing costs</p>
                            </div>
                        </div>
                    </div>

                    {/* Team Breakdown */}
                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                        <h3 className="text-xl font-semibold mb-4">Team Composition</h3>

                        <div className="space-y-4">
                            {Object.entries(teamHours)
                                .filter(([_, hours]) => hours > 0)
                                .sort((a, b) => b[1] - a[1]) // Sort by hours in descending order
                                .map(([role, hours]) => (
                                    <div key={role} className="bg-slate-50 p-4 rounded-lg">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-medium text-slate-700">{formatRoleName(role)}</h4>
                                            <div className="flex items-center">
                                                <span className="text-slate-700 font-medium">{hours} hours</span>
                                                <span
                                                    className="text-xs text-slate-500 ml-2">(${teamMemberCost[role]}/hr)</span>
                                            </div>
                                        </div>

                                        <div className="w-full bg-slate-200 rounded-full h-2 mb-3">
                                            <div
                                                className="h-2 rounded-full bg-blue-500"
                                                style={{width: `${(hours / totalHours) * 100}%`}}
                                            ></div>
                                        </div>

                                        <p className="text-sm text-slate-600">
                                            ${Math.round(hours * teamMemberCost[role]).toLocaleString()} total
                                            ({Math.round((hours / totalHours) * 100)}% of budget)
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* Right Column - Task Lists */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                    <h3 className="text-xl font-semibold mb-6">Implementation Task List</h3>

                    <div className="space-y-6">
                        {Object.entries(teamHours)
                            .filter(([_, hours]) => hours > 0)
                            .sort((a, b) => b[1] - a[1]) // Sort by hours in descending order
                            .map(([role, hours]) => (
                                <div key={role} className="bg-slate-50 p-4 rounded-lg">
                                    <h4 className="font-medium text-slate-700 mb-3 flex items-center">
                                        <div
                                            className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-2">
                                            <span
                                                className="text-xs font-bold">{Object.entries(teamHours).sort((a, b) => b[1] - a[1]).findIndex(([r]) => r === role) + 1}</span>
                                        </div>
                                        {formatRoleName(role)} Tasks
                                    </h4>

                                    <ul className="space-y-2">
                                        {commonTasks[selectedTab === 'mvp' ? 'mvp' : 'full'][role]?.map((task, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckSquare size={16}
                                                             className="text-blue-500 mr-2 mt-0.5 flex-shrink-0"/>
                                                <span className="text-sm text-slate-700">{task}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {role === 'manager' && selectedTab === 'mvp' && (
                                        <div
                                            className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-700">
                                            <p className="font-medium">MVP Focus:</p>
                                            <p>Core functionality, rapid deployment, and proving the concept with
                                                minimal features.</p>
                                        </div>
                                    )}

                                    {role === 'manager' && selectedTab === 'full' && (
                                        <div
                                            className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-700">
                                            <p className="font-medium">Full Implementation Focus:</p>
                                            <p>Robust, scalable solution with complete feature set, high reliability,
                                                and integration with all necessary systems.</p>
                                        </div>
                                    )}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* Implementation Phases */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                <h3 className="text-xl font-semibold mb-6">Implementation Roadmap</h3>

                <div className="relative">
                    {/* Timeline Bar */}
                    <div className="absolute left-16 top-0 bottom-0 w-1 bg-blue-200"></div>

                    {/* Phases */}
                    <div className="space-y-8">
                        <div className="flex">
                            <div className="w-16 flex-shrink-0 flex items-center justify-center">
                                <div
                                    className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">1
                                </div>
                            </div>
                            <div className="ml-8 bg-slate-50 p-4 rounded-lg flex-grow">
                                <h4 className="font-medium text-slate-700 mb-2">Setup & Infrastructure</h4>
                                <p className="text-sm text-slate-600 mb-3">Initial setup of development environments,
                                    infrastructure, and core dependencies.</p>
                                <div className="text-xs text-slate-500">
                                    {selectedTab === 'mvp' ? '1-2 weeks' : '2-3 weeks'}
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-16 flex-shrink-0 flex items-center justify-center">
                                <div
                                    className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">2
                                </div>
                            </div>
                            <div className="ml-8 bg-slate-50 p-4 rounded-lg flex-grow">
                                <h4 className="font-medium text-slate-700 mb-2">Core Component Integration</h4>
                                <p className="text-sm text-slate-600 mb-3">Integration of telephony, STT, LLM, and TTS
                                    components into a basic working pipeline.</p>
                                <div className="text-xs text-slate-500">
                                    {selectedTab === 'mvp' ? '2-3 weeks' : '4-6 weeks'}
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-16 flex-shrink-0 flex items-center justify-center">
                                <div
                                    className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">3
                                </div>
                            </div>
                            <div className="ml-8 bg-slate-50 p-4 rounded-lg flex-grow">
                                <h4 className="font-medium text-slate-700 mb-2">{selectedTab === 'mvp' ? 'Basic' : 'Advanced'} Conversation
                                    Logic</h4>
                                <p className="text-sm text-slate-600 mb-3">
                                    {selectedTab === 'mvp'
                                        ? 'Implementation of simple conversation flows and basic user interactions.'
                                        : 'Development of sophisticated conversation handling, context management, and complex user interactions.'}
                                </p>
                                <div className="text-xs text-slate-500">
                                    {selectedTab === 'mvp' ? '2-3 weeks' : '6-8 weeks'}
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="w-16 flex-shrink-0 flex items-center justify-center">
                                <div
                                    className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">4
                                </div>
                            </div>
                            <div className="ml-8 bg-slate-50 p-4 rounded-lg flex-grow">
                                <h4 className="font-medium text-slate-700 mb-2">Testing & Refinement</h4>
                                <p className="text-sm text-slate-600 mb-3">
                                    {selectedTab === 'mvp'
                                        ? 'Basic testing and bug fixing to ensure core functionality works reliably.'
                                        : 'Comprehensive testing, performance optimization, and fine-tuning of all components.'}
                                </p>
                                <div className="text-xs text-slate-500">
                                    {selectedTab === 'mvp' ? '1-2 weeks' : '4-6 weeks'}
                                </div>
                            </div>
                        </div>

                        {selectedTab === 'full' && (
                            <>
                                <div className="flex">
                                    <div className="w-16 flex-shrink-0 flex items-center justify-center">
                                        <div
                                            className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">5
                                        </div>
                                    </div>
                                    <div className="ml-8 bg-slate-50 p-4 rounded-lg flex-grow">
                                        <h4 className="font-medium text-slate-700 mb-2">Integrations & Extensions</h4>
                                        <p className="text-sm text-slate-600 mb-3">
                                            Integration with existing systems, databases, and third-party services.
                                            Implementation of reporting and analytics.
                                        </p>
                                        <div className="text-xs text-slate-500">4-6 weeks</div>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="w-16 flex-shrink-0 flex items-center justify-center">
                                        <div
                                            className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">6
                                        </div>
                                    </div>
                                    <div className="ml-8 bg-slate-50 p-4 rounded-lg flex-grow">
                                        <h4 className="font-medium text-slate-700 mb-2">Production Deployment &
                                            Monitoring</h4>
                                        <p className="text-sm text-slate-600 mb-3">
                                            Final deployment to production, implementation of monitoring, alerting, and
                                            operational support systems.
                                        </p>
                                        <div className="text-xs text-slate-500">2-4 weeks</div>
                                    </div>
                                </div>
                            </>
                        )}

                        <div className="flex">
                            <div className="w-16 flex-shrink-0 flex items-center justify-center">
                                <div
                                    className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                                    <CheckSquare size={16}/>
                                </div>
                            </div>
                            <div className="ml-8 bg-green-50 p-4 rounded-lg border border-green-200 flex-grow">
                                <h4 className="font-medium text-green-700">
                                    {selectedTab === 'mvp' ? 'MVP Launch' : 'Full Launch'}
                                </h4>
                                <p className="text-sm text-green-600">
                                    {selectedTab === 'mvp'
                                        ? 'Basic system ready for initial testing and feedback from real users.'
                                        : 'Complete, production-ready system with all features implemented.'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call-to-Action */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-xl shadow-md text-white">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Ready to Move Forward?</h3>
                        <p className="opacity-90">Let's discuss your specific requirements and create a custom
                            implementation plan.</p>
                    </div>

                    <button
                        className="mt-4 md:mt-0 px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-all shadow-md font-medium flex items-center">
                        Schedule Consultation
                        <ArrowRight size={16} className="ml-2"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SlideNine;