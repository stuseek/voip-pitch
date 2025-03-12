import React, { useState, useEffect } from 'react';
import { Phone, Mic, Cpu, VolumeX, ArrowRightCircle, Server, Cloud, RefreshCw } from 'lucide-react';

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
        return type === "cloud" ? "bg-blue-100 border-blue-300" : "bg-green-100 border-green-300";
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
        return "text-gray-800";
    };

    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Interactive Constructor – Build Your AI Assistant</h2>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
                <p>Configure your ideal AI Phone Assistant by selecting components for each part of the system. The diagram and metrics will update automatically to show your custom configuration.</p>
            </div>

            {/* Template Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
                    onClick={() => applyTemplate('best-realism')}
                >
                    <RefreshCw size={16} className="mr-2" />
                    Best Realism
                </button>
                <button
                    className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center"
                    onClick={() => applyTemplate('lowest-latency')}
                >
                    <RefreshCw size={16} className="mr-2" />
                    Lowest Latency
                </button>
                <button
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center"
                    onClick={() => applyTemplate('cost-effective')}
                >
                    <RefreshCw size={16} className="mr-2" />
                    Cost Effective
                </button>
                <button
                    className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 flex items-center"
                    onClick={() => applyTemplate('hipaa-compliant')}
                >
                    <RefreshCw size={16} className="mr-2" />
                    HIPAA Compliant
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Component Selectors */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Select Components</h3>

                    {/* Telephony */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                            <Phone size={18} className="mr-2 text-blue-600" />
                            Telephony
                        </h4>
                        <div className="space-y-2">
                            {nodeData.telephony?.map((node) => (
                                <div
                                    key={node.name}
                                    onClick={() => handleSelectComponent('telephony', node.name)}
                                    className={`p-3 rounded-md border flex items-center cursor-pointer transition-colors ${
                                        selectedConfig.telephony === node.name
                                            ? 'bg-blue-50 border-blue-300'
                                            : 'border-gray-200 hover:bg-gray-50'
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
                                        <div className="text-xs text-gray-500">
                                            Latency: {node.latency_ms}ms | ${node.cost_per_conversation_min.toFixed(3)}/min
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* STT */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                            <Mic size={18} className="mr-2 text-blue-600" />
                            Speech-to-Text
                        </h4>
                        <div className="space-y-2">
                            {nodeData.stt?.map((node) => (
                                <div
                                    key={node.name}
                                    onClick={() => handleSelectComponent('stt', node.name)}
                                    className={`p-3 rounded-md border flex items-center cursor-pointer transition-colors ${
                                        selectedConfig.stt === node.name
                                            ? 'bg-blue-50 border-blue-300'
                                            : 'border-gray-200 hover:bg-gray-50'
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
                                        <div className="text-xs text-gray-500">
                                            Latency: {node.latency_ms}ms | Realism: {node.realism}/10
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LLM */}
                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                            <Cpu size={18} className="mr-2 text-blue-600" />
                            Language Model
                        </h4>
                        <div className="space-y-2">
                            {nodeData.llm?.map((node) => (
                                <div
                                    key={node.name}
                                    onClick={() => handleSelectComponent('llm', node.name)}
                                    className={`p-3 rounded-md border flex items-center cursor-pointer transition-colors ${
                                        selectedConfig.llm === node.name
                                            ? 'bg-blue-50 border-blue-300'
                                            : 'border-gray-200 hover:bg-gray-50'
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
                                        <div className="text-xs text-gray-500">
                                            Latency: {node.latency_ms}ms | Realism: {node.realism}/10
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* TTS */}
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2 flex items-center">
                            <VolumeX size={18} className="mr-2 text-blue-600" />
                            Text-to-Speech
                        </h4>
                        <div className="space-y-2">
                            {nodeData.tts?.map((node) => (
                                <div
                                    key={node.name}
                                    onClick={() => handleSelectComponent('tts', node.name)}
                                    className={`p-3 rounded-md border flex items-center cursor-pointer transition-colors ${
                                        selectedConfig.tts === node.name
                                            ? 'bg-blue-50 border-blue-300'
                                            : 'border-gray-200 hover:bg-gray-50'
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
                                        <div className="text-xs text-gray-500">
                                            Latency: {node.latency_ms}ms | Realism: {node.realism}/10
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Architecture Diagram */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Architecture Diagram</h3>

                    <div className="relative py-6">
                        {/* Caller */}
                        <div className="mb-6 mx-auto p-3 bg-blue-100 rounded-lg flex items-center border-2 border-blue-300 w-48 justify-center">
                            <Phone className="text-blue-600 mr-2" size={20} />
                            <div>
                                <h3 className="font-semibold text-sm">Caller</h3>
                            </div>
                        </div>

                        <ArrowRightCircle className="transform rotate-90 text-gray-400 mb-2 mx-auto" size={20} />

                        {/* Telephony Node */}
                        <div
                            className={`mb-6 mx-auto p-3 rounded-lg flex items-center border-2 w-64 justify-center ${
                                getNodeColor(getSelectedNodeDetails('telephony').type)
                            }`}
                        >
                            <div className="text-center">
                                <h3 className="font-semibold text-sm">Telephony: {getSelectedNodeDetails('telephony').name}</h3>
                                <div className="flex justify-center mt-1">
                                    {getSelectedNodeDetails('telephony').logo && (
                                        <img
                                            src={getSelectedNodeDetails('telephony').logo}
                                            alt="Telephony logo"
                                            className="h-6 object-contain"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <ArrowRightCircle className="transform rotate-90 text-gray-400 mb-2 mx-auto" size={20} />

                        {/* STT Node */}
                        <div
                            className={`mb-6 mx-auto p-3 rounded-lg flex items-center border-2 w-64 justify-center ${
                                getNodeColor(getSelectedNodeDetails('stt').type)
                            }`}
                        >
                            <div className="text-center">
                                <h3 className="font-semibold text-sm">STT: {getSelectedNodeDetails('stt').name}</h3>
                                <div className="flex justify-center mt-1">
                                    {getSelectedNodeDetails('stt').logo && (
                                        <img
                                            src={getSelectedNodeDetails('stt').logo}
                                            alt="STT logo"
                                            className="h-6 object-contain"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <ArrowRightCircle className="transform rotate-90 text-gray-400 mb-2 mx-auto" size={20} />

                        {/* LLM Node */}
                        <div
                            className={`mb-6 mx-auto p-3 rounded-lg flex items-center border-2 w-64 justify-center ${
                                getNodeColor(getSelectedNodeDetails('llm').type)
                            }`}
                        >
                            <div className="text-center">
                                <h3 className="font-semibold text-sm">LLM: {getSelectedNodeDetails('llm').name}</h3>
                                <div className="flex justify-center mt-1">
                                    {getSelectedNodeDetails('llm').logo && (
                                        <img
                                            src={getSelectedNodeDetails('llm').logo}
                                            alt="LLM logo"
                                            className="h-6 object-contain"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <ArrowRightCircle className="transform rotate-90 text-gray-400 mb-2 mx-auto" size={20} />

                        {/* TTS Node */}
                        <div
                            className={`mb-6 mx-auto p-3 rounded-lg flex items-center border-2 w-64 justify-center ${
                                getNodeColor(getSelectedNodeDetails('tts').type)
                            }`}
                        >
                            <div className="text-center">
                                <h3 className="font-semibold text-sm">TTS: {getSelectedNodeDetails('tts').name}</h3>
                                <div className="flex justify-center mt-1">
                                    {getSelectedNodeDetails('tts').logo && (
                                        <img
                                            src={getSelectedNodeDetails('tts').logo}
                                            alt="TTS logo"
                                            className="h-6 object-contain"
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <ArrowRightCircle className="transform rotate-90 text-gray-400 mb-2 mx-auto" size={20} />

                        {/* Response */}
                        <div className="mx-auto p-3 bg-blue-100 rounded-lg flex items-center border-2 border-blue-300 w-48 justify-center">
                            <VolumeX className="text-blue-600 mr-2" size={20} />
                            <div>
                                <h3 className="font-semibold text-sm">Response</h3>
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="absolute bottom-0 right-0 bg-white p-2 border rounded text-xs">
                            <div className="flex items-center mb-1">
                                <div className="w-3 h-3 bg-blue-100 border border-blue-300 mr-1"></div>
                                <span>Cloud</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-100 border border-green-300 mr-1"></div>
                                <span>On-Premises</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Metrics */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>

                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">Deployment Type</h4>
                            <div className="text-lg font-medium">{metrics.deploymentType}</div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">Total Latency</h4>
                            <div className="text-lg font-medium">
                <span className={getMetricColor('latency', metrics.totalLatency)}>
                  {metrics.totalLatency}ms
                </span>
                                <span className="text-sm ml-2">({getLatencyRating(metrics.totalLatency)})</span>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">Realism Score</h4>
                            <div className="text-lg font-medium">
                <span className={getMetricColor('realism', metrics.avgRealism)}>
                  {metrics.avgRealism}/10
                </span>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">HIPAA Compliance</h4>
                            <div className="text-lg font-medium">
                <span className={getMetricColor('complianceLevel', metrics.complianceLevel)}>
                  {metrics.complianceLevel}
                </span>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-700 mb-2">Cost Per Minute</h4>
                            <div className="text-lg font-medium">
                <span className={getMetricColor('cost', metrics.costPerMin)}>
                  ${metrics.costPerMin.toFixed(3)}
                </span>
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-yellow-700 mb-2">Cost Estimates</h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Monthly (8hr/day):</span>
                                    <span className="font-medium">${metrics.totalCostMonthly}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>MVP Development:</span>
                                    <span className="font-medium">${metrics.mvpCost.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Full Implementation:</span>
                                    <span className="font-medium">${metrics.fullCost.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Annual Support:</span>
                                    <span className="font-medium">${metrics.annualSupportCost.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Export Configuration
                    </button>
                </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4">Configuration Summary</h3>
                <p className="mb-4">
                    Your current configuration is a <strong>{metrics.deploymentType}</strong> solution with
                    <strong className={getMetricColor('latency', metrics.totalLatency)}> {getLatencyRating(metrics.totalLatency).toLowerCase()} latency</strong> and
                    <strong className={getMetricColor('realism', metrics.avgRealism)}> {
                        metrics.avgRealism >= 9 ? 'excellent' :
                            metrics.avgRealism >= 7 ? 'good' :
                                'moderate'
                    } realism</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold mb-1">Advantages</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
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

                    <div>
                        <h4 className="font-semibold mb-1">Considerations</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
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