import React, { useState, useEffect } from 'react';
import { RefreshCw, Info } from 'lucide-react';
import ComponentSelectors from './ComponentSelectors';
import ArchitectureDiagram from './ArchitectureDiagram';
import PerformanceMetrics from './PerformanceMetrics';
import ConfigurationSummary from './ConfigurationSummary';
import { calculateMetrics } from './MetricUtils';

const SlideEight = ({ nodeData, selectedConfig, setSelectedConfig }) => {
    const [metrics, setMetrics] = useState({
        totalLatency: 0,
        avgRealism: 0,
        costPerMin: 0,
        annualSupportCost: 0,
        mvpCost: 0,
        fullCost: 0,
        deploymentType: "",
        complianceLevel: "",
        totalCostMonthly: 0
    });

    const [showTooltip, setShowTooltip] = useState('');

    // Apply template configurations with improved selection logic
    const applyTemplate = (template) => {
        // Helper to score components based on multiple criteria
        const scoreComponent = (component, weights) => {
            if (!component) return 0;

            // Normalize values to a 0-10 scale
            const normalizedLatency = Math.max(0, 10 - (component.latency_ms / 200)); // Lower is better
            const normalizedCost = Math.max(0, 10 - (component.cost_per_conversation_min * 1000)); // Lower is better
            const isOnPrem = component.type === 'on-prem' ? 10 : 0; // On-prem gets 10, cloud gets 0

            // Calculate weighted score
            return (
                (weights.realism * component.realism) +
                (weights.latency * normalizedLatency) +
                (weights.cost * normalizedCost) +
                (weights.compliance * isOnPrem)
            );
        };

        // Find the best component in a category based on weights
        const findBestComponent = (category, weights) => {
            if (!nodeData[category]?.length) return "";

            // Score each component and sort
            const scored = nodeData[category].map(item => ({
                name: item.name,
                score: scoreComponent(item, weights)
            }));

            const sorted = [...scored].sort((a, b) => b.score - a.score);
            return sorted[0]?.name || "";
        };

        // Find the lowest cost component that meets minimum requirements
        const findBestCostComponent = (category, minRealism = 6) => {
            if (!nodeData[category]?.length) return "";

            // Filter by minimum realism
            const viable = nodeData[category].filter(item => item.realism >= minRealism);

            // Calculate 5-year total cost of ownership (TCO)
            const withTCO = viable.map(item => {
                // Monthly operational cost (assuming 24/7 operation)
                const monthlyOpCost = item.cost_per_conversation_min * 60 * 24 * 30;

                // Implementation cost (assuming full implementation)
                const implCost = Object.entries(item.full_implementation_cost || {}).reduce(
                    (sum, [role, hours]) => sum + hours, 0
                ) * 85; // Average hourly rate

                // 5-year TCO
                const tco = (monthlyOpCost * 12 * 5) + implCost + (item.annual_support_cost * 5);

                return { name: item.name, tco };
            });

            const sorted = [...withTCO].sort((a, b) => a.tco - b.tco);
            return sorted[0]?.name || "";
        };

        // Find components that best balance latency and realism (with special handling for LLMs)
        const findBalancedLatencyComponent = (category, maxLatency = 800) => {
            if (!nodeData[category]?.length) return "";

            // For LLMs, prioritize latency strictly
            if (category === 'llm') {
                // Just get the lowest latency option
                const sorted = [...nodeData[category]].sort((a, b) => a.latency_ms - b.latency_ms);
                return sorted[0]?.name || "";
            }

            // For other components, filter by acceptable latency
            const viableLatency = nodeData[category].filter(item => item.latency_ms <= maxLatency);

            // If nothing meets latency requirement, just get lowest latency
            if (viableLatency.length === 0) {
                const sorted = [...nodeData[category]].sort((a, b) => a.latency_ms - b.latency_ms);
                return sorted[0]?.name || "";
            }

            // From viable latency options, pick highest realism
            const sorted = [...viableLatency].sort((a, b) => b.realism - a.realism);
            return sorted[0]?.name || "";
        };

        // Find the most HIPAA-compliant components prioritizing on-prem and latency
        const findHIPAAComponent = (category, minRealism = 6) => {
            if (!nodeData[category]?.length) return "";

            // Step 1: Get all on-prem options
            const onPremOptions = nodeData[category].filter(
                item => item.type === 'on-prem'
            );

            // If we have on-prem options that meet minimum realism, prioritize those
            const viableOnPremOptions = onPremOptions.filter(item => item.realism >= minRealism);

            // If we have viable on-prem options, sort them by latency (lowest first)
            if (viableOnPremOptions.length > 0) {
                const sorted = [...viableOnPremOptions].sort((a, b) => a.latency_ms - b.latency_ms);
                return sorted[0]?.name || "";
            }

            // If no viable on-prem options, try any on-prem option sorted by latency
            if (onPremOptions.length > 0) {
                const sorted = [...onPremOptions].sort((a, b) => a.latency_ms - b.latency_ms);
                return sorted[0]?.name || "";
            }

            // Step 2: If no on-prem options available, fall back to cloud with a warning
            const cloudOptions = nodeData[category].filter(
                item => item.realism >= minRealism
            );

            if (cloudOptions.length > 0) {
                // Still sort by latency for cloud options
                const sorted = [...cloudOptions].sort((a, b) => a.latency_ms - b.latency_ms);
                return sorted[0]?.name || "";
            }

            // Fallback: just pick lowest latency
            const sorted = [...nodeData[category]].sort((a, b) => a.latency_ms - b.latency_ms);
            return sorted[0]?.name || "";
        };

        // Apply template based on selection
        if (template === "best-realism") {
            // Best realism prioritizes realism (70%) but also considers latency (30%)
            setSelectedConfig({
                telephony: findBestComponent('telephony', { realism: 0.7, latency: 0.3, cost: 0, compliance: 0 }),
                stt: findBestComponent('stt', { realism: 0.7, latency: 0.3, cost: 0, compliance: 0 }),
                llm: findBestComponent('llm', { realism: 0.7, latency: 0.3, cost: 0, compliance: 0 }),
                tts: findBestComponent('tts', { realism: 0.7, latency: 0.3, cost: 0, compliance: 0 })
            });
            setShowTooltip('realism');
        } else if (template === "lowest-latency") {
            // Balanced latency approach with special handling for LLMs
            setSelectedConfig({
                telephony: findBalancedLatencyComponent('telephony', 300),
                stt: findBalancedLatencyComponent('stt', 500),
                llm: findBalancedLatencyComponent('llm'), // LLM handled differently - pure latency focus
                tts: findBalancedLatencyComponent('tts', 500)
            });
            setShowTooltip('latency');
        } else if (template === "cost-effective") {
            // Cost effective based on 5-year TCO calculation
            setSelectedConfig({
                telephony: findBestCostComponent('telephony'),
                stt: findBestCostComponent('stt'),
                llm: findBestCostComponent('llm'),
                tts: findBestCostComponent('tts')
            });
            setShowTooltip('cost');
        } else if (template === "hipaa-compliant") {
            // HIPAA compliant with performance considerations
            setSelectedConfig({
                telephony: findHIPAAComponent('telephony'),
                stt: findHIPAAComponent('stt'),
                llm: findHIPAAComponent('llm'),
                tts: findHIPAAComponent('tts')
            });
            setShowTooltip('hipaa');
        }
    };

    // Helper function to get selected node details
    const getSelectedNodeDetails = (category) => {
        return nodeData[category]?.find(node => node.name === selectedConfig[category]) || nodeData[category][0];
    };

    // Calculate metrics whenever selectedConfig changes
    useEffect(() => {
        const calculatedMetrics = calculateMetrics(selectedConfig, nodeData, getSelectedNodeDetails);
        if (calculatedMetrics) {
            setMetrics(calculatedMetrics);
        }
    }, [selectedConfig, nodeData, getSelectedNodeDetails]);

    // Tooltip content based on selection
    const getTooltipContent = () => {
        if (showTooltip === 'realism') {
            return "Optimized for the most human-like experience with high-quality voice and conversational abilities. May have higher latency.";
        } else if (showTooltip === 'latency') {
            return "Optimized for the fastest response times. For LLMs, we're strictly prioritizing speed over quality.";
        } else if (showTooltip === 'cost') {
            return "Balanced for the lowest 5-year total cost of ownership while maintaining acceptable quality.";
        } else if (showTooltip === 'hipaa') {
            return "Prioritizes on-premises components for maximum data security and HIPAA compliance.";
        }
        return "";
    };

    return (
        <div className="p-8 space-y-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Interactive Constructor</h2>
                <p className="text-slate-500 max-w-3xl mx-auto">Build your ideal AI Phone Assistant by selecting components and viewing real-time metrics</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-slate-200">
                <p className="text-slate-700">Configure your ideal AI Phone Assistant by selecting components for each part of the system. The diagram and metrics will update automatically to show your custom configuration.</p>
            </div>

            {/* Template Buttons with Fixed Position Tooltips */}
            <div className="relative mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="relative">
                        <button
                            className={`w-full p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center ${showTooltip === 'realism' ? 'ring-2 ring-blue-400' : ''}`}
                            onClick={() => applyTemplate('best-realism')}
                            onMouseEnter={() => setShowTooltip('realism')}
                            onMouseLeave={() => setShowTooltip('')}
                        >
                            <RefreshCw size={16} className="mr-2" />
                            Best Realism
                        </button>
                        {showTooltip === 'realism' && (
                            <div className="absolute left-0 right-0 bottom-full mb-2 z-10">
                                <div className="bg-slate-800 text-white p-3 rounded-lg text-sm shadow-lg">
                                    <div className="flex items-start">
                                        <Info size={16} className="text-slate-300 mr-2 mt-0.5 flex-shrink-0" />
                                        <p>{getTooltipContent()}</p>
                                    </div>
                                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            className={`w-full p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-center ${showTooltip === 'latency' ? 'ring-2 ring-purple-400' : ''}`}
                            onClick={() => applyTemplate('lowest-latency')}
                            onMouseEnter={() => setShowTooltip('latency')}
                            onMouseLeave={() => setShowTooltip('')}
                        >
                            <RefreshCw size={16} className="mr-2" />
                            Low Latency
                        </button>
                        {showTooltip === 'latency' && (
                            <div className="absolute left-0 right-0 bottom-full mb-2 z-10">
                                <div className="bg-slate-800 text-white p-3 rounded-lg text-sm shadow-lg">
                                    <div className="flex items-start">
                                        <Info size={16} className="text-slate-300 mr-2 mt-0.5 flex-shrink-0" />
                                        <p>{getTooltipContent()}</p>
                                    </div>
                                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            className={`w-full p-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-center ${showTooltip === 'cost' ? 'ring-2 ring-green-400' : ''}`}
                            onClick={() => applyTemplate('cost-effective')}
                            onMouseEnter={() => setShowTooltip('cost')}
                            onMouseLeave={() => setShowTooltip('')}
                        >
                            <RefreshCw size={16} className="mr-2" />
                            Cost Effective
                        </button>
                        {showTooltip === 'cost' && (
                            <div className="absolute left-0 right-0 bottom-full mb-2 z-10">
                                <div className="bg-slate-800 text-white p-3 rounded-lg text-sm shadow-lg">
                                    <div className="flex items-start">
                                        <Info size={16} className="text-slate-300 mr-2 mt-0.5 flex-shrink-0" />
                                        <p>{getTooltipContent()}</p>
                                    </div>
                                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <button
                            className={`w-full p-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 flex items-center justify-center ${showTooltip === 'hipaa' ? 'ring-2 ring-amber-400' : ''}`}
                            onClick={() => applyTemplate('hipaa-compliant')}
                            onMouseEnter={() => setShowTooltip('hipaa')}
                            onMouseLeave={() => setShowTooltip('')}
                        >
                            <RefreshCw size={16} className="mr-2" />
                            HIPAA Compliant
                        </button>
                        {showTooltip === 'hipaa' && (
                            <div className="absolute left-0 right-0 bottom-full mb-2 z-10">
                                <div className="bg-slate-800 text-white p-3 rounded-lg text-sm shadow-lg">
                                    <div className="flex items-start">
                                        <Info size={16} className="text-slate-300 mr-2 mt-0.5 flex-shrink-0" />
                                        <p>{getTooltipContent()}</p>
                                    </div>
                                    <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-slate-800"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Component Selectors */}
                <div className="lg:col-span-4">
                    <ComponentSelectors
                        nodeData={nodeData}
                        selectedConfig={selectedConfig}
                        setSelectedConfig={setSelectedConfig}
                    />
                </div>

                {/* Architecture Diagram */}
                <div className="lg:col-span-4">
                    <ArchitectureDiagram
                        getSelectedNodeDetails={getSelectedNodeDetails}
                    />
                </div>

                {/* Metrics */}
                <div className="lg:col-span-4">
                    <PerformanceMetrics metrics={metrics} />
                </div>
            </div>

            {/* Summary */}
            <ConfigurationSummary metrics={metrics} />
        </div>
    );
};

export default SlideEight;