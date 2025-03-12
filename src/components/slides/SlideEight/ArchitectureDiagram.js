import React from 'react';
import { Phone, Mic, Cpu, VolumeX, Server, Cloud } from 'lucide-react';
import { getNodeColor } from './MetricUtils';

const ArchitectureDiagram = ({ getSelectedNodeDetails }) => {

    return (
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
    );
};

export default ArchitectureDiagram;