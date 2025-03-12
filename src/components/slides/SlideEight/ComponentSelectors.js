import React from 'react';
import { Phone, Mic, Cpu, VolumeX, Cloud, Server } from 'lucide-react';
import FallbackImage from './FallbackImage';

const ComponentSelectors = ({ nodeData, selectedConfig, setSelectedConfig }) => {
    // Handler for component selection
    const handleSelectComponent = (category, componentName) => {
        setSelectedConfig({
            ...selectedConfig,
            [category]: componentName
        });
    };

    return (
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
                                        <FallbackImage
                                            src={node.logo}
                                            alt={`${node.name} logo`}
                                            className="h-5 w-5 mr-2 object-contain"
                                        />
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
                                        <FallbackImage
                                            src={node.logo}
                                            alt={`${node.name} logo`}
                                            className="h-5 w-5 mr-2 object-contain"
                                        />
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
                                        <FallbackImage
                                            src={node.logo}
                                            alt={`${node.name} logo`}
                                            className="h-5 w-5 mr-2 object-contain"
                                        />
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
                                        <FallbackImage
                                            src={node.logo}
                                            alt={`${node.name} logo`}
                                            className="h-5 w-5 mr-2 object-contain"
                                        />
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
    );
};

export default ComponentSelectors;