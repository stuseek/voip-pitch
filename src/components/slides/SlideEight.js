import React, { useState, useEffect } from 'react';
import { Phone, Mic, Cpu, VolumeX, Server, Cloud, RefreshCw, FileDown, CheckCircle, AlertTriangle } from 'lucide-react';

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

    const [activeSection, setActiveSection] = useState(null);

    // Toggle dropdown sections
    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    // Handler for component selection
    const handleSelectComponent = (category, componentName) => {
        setSelectedConfig({
            ...selectedConfig,
            [category]: componentName
        });
    };

    // Apply template configurations
    const applyTemplate = (template) => {
        if (template === "best-realism") {
            setSelectedConfig({
                telephony: "Twilio (Cloud)",
                stt: "Deepgram (Cloud)",
                llm: "OpenAI GPT-4 (Cloud)",
                tts: "ElevenLabs (Cloud)"
            });
        } else if (template === "lowest-latency") {
            setSelectedConfig({
                telephony: "On-Prem PBX (Asterisk)",
                stt: "Whisper (On-Prem)",
                llm: "OpenAI GPT-3.5 (Cloud)", // Faster than the on-prem option in our data
                tts: "Offline TTS (On-Prem)"
            });
        } else if (template === "cost-effective") {
            setSelectedConfig({
                telephony: "On-Prem PBX (Asterisk)",
                stt: "Whisper (On-Prem)",
                llm: "LLaMA-2 13B (On-Prem)",
                tts: "Offline TTS (On-Prem)"
            });
        } else if (template === "hipaa-compliant") {
            setSelectedConfig({
                telephony: "On-Prem PBX (Asterisk)",
                stt: "Whisper (On-Prem)",
                llm: "LLaMA-2 13B (On-Prem)",
                tts: "Offline TTS (On-Prem)"
            });
        }
    };

    // Helper function to get selected node details
    const getSelectedNodeDetails = (category) => {
        return nodeData[category]?.find(node => node.name === selectedConfig[category]) || nodeData[category][0];
    };

    // Calculate metrics whenever selectedConfig changes
    useEffect(() => {
        const telephony = getSelectedNodeDetails('telephony');
        const stt = getSelectedNodeDetails('stt');
        const llm = getSelectedNodeDetails('llm');
        const tts = getSelectedNodeDetails('tts');

        if (!telephony || !stt || !llm || !tts) return;

        const totalLatency = telephony.latency_ms + stt.latency_ms + llm.latency_ms + tts.latency_ms;
        const avgRealism = Math.round((telephony.realism + stt.realism + llm.realism + tts.realism) / 4);
        const costPerMin = telephony.cost_per_conversation_min + stt.cost_per_conversation_min +
            llm.cost_per_conversation_min + tts.cost_per_conversation_min;
        const annualSupportCost = telephony.annual_support_cost + stt.annual_support_cost +
            llm.annual_support_cost + tts.annual_support_cost;
        const mvpCost = telephony.mvp_cost + stt.mvp_cost + llm.mvp_cost + tts.mvp_cost;
        const fullCost = telephony.full_implementation_cost + stt.full_implementation_cost +
            llm.full_implementation_cost + tts.full_implementation_cost;

        // Determine deployment type based on selections
        const allCloud = [telephony, stt, llm, tts].every(item => item.type === "cloud");
        const allOnPrem = [telephony, stt, llm, tts].every(item => item.type === "on-prem");
        let deploymentType = "Hybrid";
        if (allCloud) deploymentType = "Full Cloud";
        if (allOnPrem) deploymentType = "Full On-Premises";

        // Compliance level assessment
        let complianceLevel = "Medium";
        if (allOnPrem) complianceLevel = "High";
        if (allCloud) complianceLevel = "Low to Medium";

        const totalCostMonthly = (costPerMin * 60 * 8 * 30).toFixed(2); // Assuming 8 hours/day, 30 days

        setMetrics({
            totalLatency,
            avgRealism,
            costPerMin,
            annualSupportCost,
            mvpCost,
            fullCost,
            deploymentType,
            complianceLevel,
            totalCostMonthly
        });
    }, [selectedConfig, nodeData]);

    // Display latency rating based on ms
    const getLatencyRating = (ms) => {
        if (ms < 500) return "Excellent";
        if (ms < 800) return "Good";
        if (ms < 1000) return "Acceptable";
        return "Poor";
    };

    // Get node background color based on type
    const getNodeColor = (type) => {
        return type === "cloud"
            ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
            : "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200";
    };

    // Get metrics color class based on value
    const getMetricColor = (metric, value) => {
        if (metric === "realism" || metric === "complianceLevel") {
            if (value >= 9 || value === "High") return "text-green-600";
            if (value >= 7 || value === "Medium") return "text-yellow-600";
            return "text-red-600";
        }
        if (metric === "latency") {
            if (value < 500) return "text-green-600";
            if (value < 1000) return "text-yellow-600";
            return "text-red-600";
        }
        if (metric === "cost") {
            if (value < 0.03) return "text-green-600";
            if (value < 0.07) return "text-yellow-600";
            return "text-red-600";
        }
        return "text-slate-800";
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

            {/* Template Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <button
                    className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
                    onClick={() => applyTemplate('best-realism')}
                >
                    <RefreshCw size={16} className="mr-2" />
                    Best Realism
                </button>
                <button
                    className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-center"
                    onClick={() => applyTemplate('lowest-latency')}
                >
                    <RefreshCw size={16} className="mr-2" />
                    Lowest Latency
                </button>
                <button
                    className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-center"
                    onClick={() => applyTemplate('cost-effective')}
                >
                    <RefreshCw size={16} className="mr-2" />
                    Cost Effective
                </button>
                <button
                    className="p-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-500 flex items-center justify-center"
                    onClick={() => applyTemplate('hipaa-compliant')}
                >
                    <RefreshCw size={16} className="mr-2" />
                    HIPAA Compliant
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Component Selectors */}
                <div className="lg:col-span-4">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
                        <h3 className="text-xl font-bold mb-6">Select Components</h3>

                        {/* Telephony */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                                <Phone size={18} className="mr-3 text-blue-600" />
                                Telephony
                            </h4>
                            <div className="space-y-2">
                                {nodeData.telephony?.map((node) => (
                                    <div
                                        key={node.name}
                                        onClick={() => handleSelectComponent('telephony', node.name)}
                                        className={`p-3 rounded-lg border flex items-center cursor-pointer transition-all ${
                                            selectedConfig.telephony === node.name
                                                ? 'bg-blue-50 border-blue-300 shadow-sm'
                                                : 'border-slate-200 hover:bg-slate-50'
                                        }`}
                                    >
                                        {node.type === 'cloud' ? (
                                            <Cloud size={18} className="mr-2 text-blue-500" />
                                        ) : (
                                            <Server size={18} className="mr-2 text-green-500" />
                                        )}
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                {node.logo && (
                                                    <img src={node.logo} alt={`${node.name} logo`} className="h-5 w-5 mr-2 object-contain" />
                                                )}
                                                <span>{node.name}</span>
                                            </div>
                                            <div className="text-xs text-slate-500 mt-1">
                                                Latency: {node.latency_ms}ms | ${node.cost_per_conversation_min.toFixed(3)}/min
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* STT */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                                <Mic size={18} className="mr-3 text-blue-600" />
                                Speech-to-Text
                            </h4>
                            <div className="space-y-2">
                                {nodeData.stt?.map((node) => (
                                    <div
                                        key={node.name}
                                        onClick={() => handleSelectComponent('stt', node.name)}
                                        className={`p-3 rounded-lg border flex items-center cursor-pointer transition-all ${
                                            selectedConfig.stt === node.name
                                                ? 'bg-blue-50 border-blue-300 shadow-sm'
                                                : 'border-slate-200 hover:bg-slate-50'
                                        }`}
                                    >
                                        {node.type === 'cloud' ? (
                                            <Cloud size={18} className="mr-2 text-blue-500" />
                                        ) : (
                                            <Server size={18} className="mr-2 text-green-500" />
                                        )}
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                {node.logo && (
                                                    <img src={node.logo} alt={`${node.name} logo`} className="h-5 w-5 mr-2 object-contain" />
                                                )}
                                                <span>{node.name}</span>
                                            </div>
                                            <div className="text-xs text-slate-500 mt-1">
                                                Latency: {node.latency_ms}ms | Realism: {node.realism}/10
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* LLM */}
                        <div className="mb-6">
                            <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                                <Cpu size={18} className="mr-3 text-blue-600" />
                                Language Model
                            </h4>
                            <div className="space-y-2">
                                {nodeData.llm?.map((node) => (
                                    <div
                                        key={node.name}
                                        onClick={() => handleSelectComponent('llm', node.name)}
                                        className={`p-3 rounded-lg border flex items-center cursor-pointer transition-all ${
                                            selectedConfig.llm === node.name
                                                ? 'bg-blue-50 border-blue-300 shadow-sm'
                                                : 'border-slate-200 hover:bg-slate-50'
                                        }`}
                                    >
                                        {node.type === 'cloud' ? (
                                            <Cloud size={18} className="mr-2 text-blue-500" />
                                        ) : (
                                            <Server size={18} className="mr-2 text-green-500" />
                                        )}
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                {node.logo && (
                                                    <img src={node.logo} alt={`${node.name} logo`} className="h-5 w-5 mr-2 object-contain" />
                                                )}
                                                <span>{node.name}</span>
                                            </div>
                                            <div className="text-xs text-slate-500 mt-1">
                                                Latency: {node.latency_ms}ms | Realism: {node.realism}/10
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* TTS */}
                        <div>
                            <h4 className="font-semibold text-slate-700 mb-3 flex items-center">
                                <VolumeX size={18} className="mr-3 text-blue-600" />
                                Text-to-Speech
                            </h4>
                            <div className="space-y-2">
                                {nodeData.tts?.map((node) => (
                                    <div
                                        key={node.name}
                                        onClick={() => handleSelectComponent('tts', node.name)}
                                        className={`p-3 rounded-lg border flex items-center cursor-pointer transition-all ${
                                            selectedConfig.tts === node.name
                                                ? 'bg-blue-50 border-blue-300 shadow-sm'
                                                : 'border-slate-200 hover:bg-slate-50'
                                        }`}
                                    >
                                        {node.type === 'cloud' ? (
                                            <Cloud size={18} className="mr-2 text-blue-500" />
                                        ) : (
                                            <Server size={18} className="mr-2 text-green-500" />
                                        )}
                                        <div className="flex-1">
                                            <div className="flex items-center">
                                                {node.logo && (
                                                    <img src={node.logo} alt={`${node.name} logo`} className="h-5 w-5 mr-2 object-contain" />
                                                )}
                                                <span>{node.name}</span>
                                            </div>
                                            <div className="text-xs text-slate-500 mt-1">
                                                Latency: {node.latency_ms}ms | Realism: {node.realism}/10
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Architecture Diagram */}
                <div className="lg:col-span-4">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 h-full">
                        <h3 className="text-xl font-bold mb-6 text-center">Architecture Diagram</h3>

                        <div className="relative py-6">
                            {/* Caller */}
                            <div className="mb-6 mx-auto p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center border border-blue-200 w-48 justify-center shadow-sm">
                                <Phone className="text-blue-600 mr-2" size={20} />
                                <div>
                                    <h3 className="font-semibold text-sm">Caller</h3>
                                </div>
                            </div>

                            <svg className="w-6 h-6 text-indigo-400 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>

                            {/* Telephony Node */}
                            <div
                                className={`mb-6 mx-auto p-3 rounded-lg flex items-center border w-64 justify-center ${
                                    getNodeColor(getSelectedNodeDetails('telephony').type)
                                } shadow-sm transition-all`}
                            >
                                <div className="text-center">
                                    <h3 className="font-semibold text-sm">Telephony</h3>
                                    <div className="flex justify-center items-center mt-2 gap-2">
                                        {getSelectedNodeDetails('telephony').logo && (
                                            <img
                                                src={getSelectedNodeDetails('telephony').logo}
                                                alt="Telephony logo"
                                                className="h-6 object-contain"
                                            />
                                        )}
                                        <span className="text-xs text-slate-600">{getSelectedNodeDetails('telephony').name}</span>
                                    </div>
                                </div>
                            </div>

                            <svg className="w-6 h-6 text-indigo-400 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>

                            {/* STT Node */}
                            <div
                                className={`mb-6 mx-auto p-3 rounded-lg flex items-center border w-64 justify-center ${
                                    getNodeColor(getSelectedNodeDetails('stt').type)
                                } shadow-sm transition-all`}
                            >
                                <div className="text-center">
                                    <h3 className="font-semibold text-sm">Speech-to-Text</h3>
                                    <div className="flex justify-center items-center mt-2 gap-2">
                                        {getSelectedNodeDetails('stt').logo && (
                                            <img
                                                src={getSelectedNodeDetails('stt').logo}
                                                alt="STT logo"
                                                className="h-6 object-contain"
                                            />
                                        )}
                                        <span className="text-xs text-slate-600">{getSelectedNodeDetails('stt').name}</span>
                                    </div>
                                </div>
                            </div>

                            <svg className="w-6 h-6 text-indigo-400 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>

                            {/* LLM Node */}
                            <div
                                className={`mb-6 mx-auto p-3 rounded-lg flex items-center border w-64 justify-center ${
                                    getNodeColor(getSelectedNodeDetails('llm').type)
                                } shadow-sm transition-all`}
                            >
                                <div className="text-center">
                                    <h3 className="font-semibold text-sm">Language Model</h3>
                                    <div className="flex justify-center items-center mt-2 gap-2">
                                        {getSelectedNodeDetails('llm').logo && (
                                            <img
                                                src={getSelectedNodeDetails('llm').logo}
                                                alt="LLM logo"
                                                className="h-6 object-contain"
                                            />
                                        )}
                                        <span className="text-xs text-slate-600">{getSelectedNodeDetails('llm').name}</span>
                                    </div>
                                </div>
                            </div>

                            <svg className="w-6 h-6 text-indigo-400 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>

                            {/* TTS Node */}
                            <div
                                className={`mb-6 mx-auto p-3 rounded-lg flex items-center border w-64 justify-center ${
                                    getNodeColor(getSelectedNodeDetails('tts').type)
                                } shadow-sm transition-all`}
                            >
                                <div className="text-center">
                                    <h3 className="font-semibold text-sm">Text-to-Speech</h3>
                                    <div className="flex justify-center items-center mt-2 gap-2">
                                        {getSelectedNodeDetails('tts').logo && (
                                            <img
                                                src={getSelectedNodeDetails('tts').logo}
                                                alt="TTS logo"
                                                className="h-6 object-contain"
                                            />
                                        )}
                                        <span className="text-xs text-slate-600">{getSelectedNodeDetails('tts').name}</span>
                                    </div>
                                </div>
                            </div>

                            <svg className="w-6 h-6 text-indigo-400 mb-2 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                            </svg>

                            {/* Response */}
                            <div className="mx-auto p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center border border-blue-200 w-48 justify-center shadow-sm">
                                <VolumeX className="text-blue-600 mr-2" size={20} />
                                <div>
                                    <h3 className="font-semibold text-sm">Response</h3>
                                </div>
                            </div>

                            {/* Legend */}
                            <div className="absolute bottom-2 right-2 bg-white p-2 border border-slate-200 rounded-lg text-xs shadow-sm">
                                <div className="flex items-center mb-1">
                                    <Cloud size={12} className="text-blue-500 mr-1" />
                                    <span>Cloud</span>
                                </div>
                                <div className="flex items-center">
                                    <Server size={12} className="text-green-500 mr-1" />
                                    <span>On-Premises</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Metrics */}
                <div className="lg:col-span-4">
                    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 h-full">
                        <h3 className="text-xl font-bold mb-6 text-center">Performance Metrics</h3>

                        <div className="space-y-4">
                            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200">
                                <h4 className="font-semibold text-slate-700 mb-2">Deployment Type</h4>
                                <div className="text-lg font-medium flex items-center">
                                    {metrics.deploymentType === "Full Cloud" ? (
                                        <Cloud size={18} className="text-blue-500 mr-2" />
                                    ) : metrics.deploymentType === "Full On-Premises" ? (
                                        <Server size={18} className="text-green-500 mr-2" />
                                    ) : (
                                        <>
                                            <Cloud size={18} className="text-blue-500 mr-1" />
                                            <Server size={18} className="text-green-500 mr-2" />
                                        </>
                                    )}
                                    {metrics.deploymentType}
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200">
                                <h4 className="font-semibold text-slate-700 mb-2">Total Latency</h4>
                                <div className="text-lg font-medium">
                                    <span className={getMetricColor('latency', metrics.totalLatency)}>
                                        {metrics.totalLatency}ms
                                    </span>
                                    <span className="text-sm ml-2 text-slate-500">({getLatencyRating(metrics.totalLatency)})</span>
                                </div>

                                <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
                                    <div
                                        className={`h-2 rounded-full ${
                                            metrics.totalLatency < 500
                                                ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                                                : metrics.totalLatency < 800
                                                    ? 'bg-gradient-to-r from-yellow-400 to-amber-500'
                                                    : 'bg-gradient-to-r from-red-500 to-rose-500'
                                        }`}
                                        style={{ width: `${Math.min(100, (metrics.totalLatency / 1500) * 100)}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200">
                                <h4 className="font-semibold text-slate-700 mb-2">Realism Score</h4>
                                <div className="text-lg font-medium">
                                    <span className={getMetricColor('realism', metrics.avgRealism)}>
                                        {metrics.avgRealism}/10
                                    </span>
                                </div>

                                <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
                                    <div
                                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                                        style={{ width: `${(metrics.avgRealism / 10) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200">
                                <h4 className="font-semibold text-slate-700 mb-2">HIPAA Compliance</h4>
                                <div className="text-lg font-medium">
                                    <span className={`px-3 py-1 rounded-full text-sm ${
                                        metrics.complianceLevel === "High"
                                            ? 'bg-green-100 text-green-800'
                                            : metrics.complianceLevel === "Medium"
                                                ? 'bg-yellow-100 text-yellow-800'
                                                : 'bg-red-100 text-red-800'
                                    }`}>
                                        {metrics.complianceLevel}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200">
                                <h4 className="font-semibold text-slate-700 mb-2">Cost Per Minute</h4>
                                <div className="text-lg font-medium">
                                    <span className={getMetricColor('cost', metrics.costPerMin)}>
                                        ${metrics.costPerMin.toFixed(3)}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200">
                                <h4 className="font-semibold text-amber-800 mb-2">Cost Estimates</h4>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-700">Monthly (8hr/day):</span>
                                        <span className="font-medium text-amber-800">${metrics.totalCostMonthly}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-700">MVP Development:</span>
                                        <span className="font-medium text-amber-800">${metrics.mvpCost.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-700">Full Implementation:</span>
                                        <span className="font-medium text-amber-800">${metrics.fullCost.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-700">Annual Support:</span>
                                        <span className="font-medium text-amber-800">${metrics.annualSupportCost.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                            <FileDown size={16} className="mr-2" />
                            Export Configuration
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl shadow-md mt-8 border border-slate-200">
                <h3 className="text-xl font-bold mb-4">Configuration Summary</h3>
                <p className="mb-4 text-slate-700">
                    Your current configuration is a <strong>{metrics.deploymentType}</strong> solution with
                    <strong className={getMetricColor('latency', metrics.totalLatency)}> {getLatencyRating(metrics.totalLatency).toLowerCase()} latency</strong> and
                    <strong className={getMetricColor('realism', metrics.avgRealism)}> {
                        metrics.avgRealism >= 9 ? 'excellent' :
                            metrics.avgRealism >= 7 ? 'good' :
                                'moderate'
                    } realism</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                        <h4 className="font-semibold mb-2 text-blue-800 flex items-center">
                            <CheckCircle size={18} className="text-blue-600 mr-2" />
                            Advantages
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-slate-700">
                            {metrics.deploymentType === "Full Cloud" && (
                                <>
                                    <li>Rapid deployment with minimal upfront investment</li>
                                    <li>State-of-the-art AI models with automatic updates</li>
                                    <li>Easily scales with demand</li>
                                </>
                            )}
                            {metrics.deploymentType === "Full On-Premises" && (
                                <>
                                    <li>Complete data control for highest security and compliance</li>
                                    <li>Lower ongoing costs once implemented</li>
                                    <li>Potential for custom optimizations and integrations</li>
                                </>
                            )}
                            {metrics.deploymentType === "Hybrid" && (
                                <>
                                    <li>Balance of control and convenience</li>
                                    <li>Can keep sensitive components in-house</li>
                                    <li>Flexible approach to scaling different components</li>
                                </>
                            )}
                            {metrics.totalLatency < 800 && (
                                <li>Responsive conversation flow with minimal delays</li>
                            )}
                            {metrics.avgRealism >= 8 && (
                                <li>Highly realistic experience for callers</li>
                            )}
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                        <h4 className="font-semibold mb-2 text-amber-800 flex items-center">
                            <AlertTriangle size={18} className="text-amber-600 mr-2" />
                            Considerations
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-slate-700">
                            {metrics.deploymentType === "Full Cloud" && (
                                <>
                                    <li>Ongoing usage costs scale with volume</li>
                                    <li>Potential data privacy and compliance challenges</li>
                                </>
                            )}
                            {metrics.deploymentType === "Full On-Premises" && (
                                <>
                                    <li>Significant upfront implementation cost</li>
                                    <li>Requires dedicated technical staff for maintenance</li>
                                </>
                            )}
                            {metrics.deploymentType === "Hybrid" && (
                                <>
                                    <li>More complex integration between components</li>
                                    <li>May require expertise in both cloud and on-prem systems</li>
                                </>
                            )}
                            {metrics.totalLatency > 800 && (
                                <li>Response delays may be noticeable to callers</li>
                            )}
                            {metrics.avgRealism < 8 && (
                                <li>Caller experience may feel less natural or AI-like</li>
                            )}
                            {metrics.costPerMin > 0.05 && (
                                <li>Higher per-minute costs may be significant at scale</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideEight;