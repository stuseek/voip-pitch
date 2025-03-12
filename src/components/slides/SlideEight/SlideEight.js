import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
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

    // Apply template configurations
    const applyTemplate = (template) => {
        // Find the first option of each category as fallback
        const firstTelephony = nodeData.telephony?.[0]?.name || "";
        const firstSTT = nodeData.stt?.[0]?.name || "";
        const firstLLM = nodeData.llm?.[0]?.name || "";
        const firstTTS = nodeData.tts?.[0]?.name || "";

        // Helper to find component by type
        const findComponentByType = (category, type) => {
            const component = nodeData[category]?.find(item => item.type === type);
            return component ? component.name : "";
        };

        // Helper to find most realistic component
        const findMostRealistic = (category) => {
            if (!nodeData[category]?.length) return "";
            const sorted = [...nodeData[category]].sort((a, b) => b.realism - a.realism);
            return sorted[0].name;
        };

        // Helper to find lowest latency component
        const findLowestLatency = (category) => {
            if (!nodeData[category]?.length) return "";
            const sorted = [...nodeData[category]].sort((a, b) => a.latency_ms - b.latency_ms);
            return sorted[0].name;
        };

        if (template === "best-realism") {
            setSelectedConfig({
                telephony: findMostRealistic('telephony') || firstTelephony,
                stt: findMostRealistic('stt') || firstSTT,
                llm: findMostRealistic('llm') || firstLLM,
                tts: findMostRealistic('tts') || firstTTS
            });
        } else if (template === "lowest-latency") {
            setSelectedConfig({
                telephony: findLowestLatency('telephony') || firstTelephony,
                stt: findLowestLatency('stt') || firstSTT,
                llm: findLowestLatency('llm') || firstLLM,
                tts: findLowestLatency('tts') || firstTTS
            });
        } else if (template === "cost-effective") {
            // On-prem solutions are typically more cost-effective long-term
            setSelectedConfig({
                telephony: findComponentByType('telephony', 'on-prem') || firstTelephony,
                stt: findComponentByType('stt', 'on-prem') || firstSTT,
                llm: findComponentByType('llm', 'on-prem') || firstLLM,
                tts: findComponentByType('tts', 'on-prem') || firstTTS
            });
        } else if (template === "hipaa-compliant") {
            // On-prem solutions offer better HIPAA compliance
            setSelectedConfig({
                telephony: findComponentByType('telephony', 'on-prem') || firstTelephony,
                stt: findComponentByType('stt', 'on-prem') || firstSTT,
                llm: findComponentByType('llm', 'on-prem') || firstLLM,
                tts: findComponentByType('tts', 'on-prem') || firstTTS
            });
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