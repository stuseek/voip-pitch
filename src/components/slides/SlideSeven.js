import React from 'react';
import { Phone, Mic, Cpu, VolumeX, ArrowRightCircle } from 'lucide-react';

const SlideSeven = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Architecture Diagram of the AI Phone Assistant</h2>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
                <p>The high-level architecture of the AI phone assistant involves a pipeline of components that work together to simulate a human-like call agent. The flow starts with the caller's voice input and ends with the assistant's voice response.</p>
            </div>

            {/* Architecture Diagram */}
            <div className="relative bg-white p-8 rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col items-center">
                    {/* Caller */}
                    <div className="mb-8 p-4 bg-blue-100 rounded-lg flex items-center border-2 border-blue-300 w-64 justify-center">
                        <Phone className="text-blue-600 mr-2" size={24} />
                        <div>
                            <h3 className="font-semibold">Caller</h3>
                            <p className="text-sm text-gray-600">PSTN Network</p>
                        </div>
                    </div>

                    <ArrowRightCircle className="transform rotate-90 text-gray-400 mb-4" size={24} />

                    {/* Step 1: Telephony */}
                    <div className="mb-8 p-4 bg-purple-100 rounded-lg flex items-center border-2 border-purple-300 w-80 justify-center">
                        <div>
                            <h3 className="font-semibold text-center">Telephony Interface</h3>
                            <p className="text-sm text-gray-600 text-center">Twilio, Vonage, or On-Prem PBX</p>
                        </div>
                    </div>

                    <ArrowRightCircle className="transform rotate-90 text-gray-400 mb-4" size={24} />

                    {/* Step 2: Speech-to-Text */}
                    <div className="mb-8 p-4 bg-green-100 rounded-lg flex items-center border-2 border-green-300 w-80 justify-center">
                        <Mic className="text-green-600 mr-2" size={24} />
                        <div>
                            <h3 className="font-semibold">Speech-to-Text (STT)</h3>
                            <p className="text-sm text-gray-600">Transcribes audio to text</p>
                        </div>
                    </div>

                    <ArrowRightCircle className="transform rotate-90 text-gray-400 mb-4" size={24} />

                    {/* Step 3: LLM/NLU */}
                    <div className="mb-8 p-4 bg-yellow-100 rounded-lg flex items-center border-2 border-yellow-300 w-80 justify-center">
                        <Cpu className="text-yellow-600 mr-2" size={24} />
                        <div>
                            <h3 className="font-semibold">Conversation Logic (LLM/NLU)</h3>
                            <p className="text-sm text-gray-600">Interprets questions, provides answers</p>
                        </div>
                    </div>

                    <ArrowRightCircle className="transform rotate-90 text-gray-400 mb-4" size={24} />

                    {/* Step 4: Text-to-Speech */}
                    <div className="mb-8 p-4 bg-red-100 rounded-lg flex items-center border-2 border-red-300 w-80 justify-center">
                        <VolumeX className="text-red-600 mr-2" size={24} />
                        <div>
                            <h3 className="font-semibold">Text-to-Speech (TTS)</h3>
                            <p className="text-sm text-gray-600">Converts text to natural speech</p>
                        </div>
                    </div>

                    <ArrowRightCircle className="transform rotate-90 text-gray-400 mb-4" size={24} />

                    {/* Back to Caller */}
                    <div className="p-4 bg-blue-100 rounded-lg flex items-center border-2 border-blue-300 w-64 justify-center">
                        <Phone className="text-blue-600 mr-2" size={24} />
                        <div>
                            <h3 className="font-semibold">Caller Hears Response</h3>
                            <p className="text-sm text-gray-600">Via PSTN Network</p>
                        </div>
                    </div>
                </div>

                {/* Side Components */}
                <div className="absolute top-1/3 right-6 p-4 bg-indigo-100 rounded-lg border-2 border-indigo-300 w-60">
                    <h3 className="font-semibold text-center">Call Orchestration</h3>
                    <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                        <li>Interruption Detection</li>
                        <li>Turn Management</li>
                        <li>Barge-in Handling</li>
                    </ul>
                </div>

                <div className="absolute top-2/3 left-6 p-4 bg-indigo-100 rounded-lg border-2 border-indigo-300 w-60">
                    <h3 className="font-semibold text-center">Application/Business Logic</h3>
                    <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                        <li>Database Integration</li>
                        <li>External API Connections</li>
                        <li>Business Rules</li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">Key Integration Points</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Telephony to STT:</strong> Audio stream must be properly captured and routed to the STT service in the correct format and sample rate.</li>
                        <li><strong>STT to LLM:</strong> Transcribed text needs to be formatted with appropriate context for the LLM to understand the conversation flow.</li>
                        <li><strong>LLM to TTS:</strong> The LLM's responses must be properly formatted for the TTS engine, potentially with SSML tags for intonation control.</li>
                        <li><strong>TTS to Telephony:</strong> The audio response must be streamed back to the caller with minimal delay.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">Critical Considerations</h3>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Real-time Processing:</strong> All components must process data quickly to maintain conversation flow.</li>
                        <li><strong>Error Handling:</strong> Graceful fallbacks if any component fails (e.g., if STT misunderstands, LLM should ask for clarification).</li>
                        <li><strong>Context Management:</strong> The system must maintain conversation context across turns.</li>
                        <li><strong>Scalability:</strong> Architecture should support handling multiple concurrent calls, especially during peak times.</li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4">Implementation Options</h3>
                <p>Each node in this architecture can be implemented using either cloud services or on-premises solutions. The next slide will let you interactively build your preferred configuration by selecting specific components for each part of the system.</p>
            </div>
        </div>
    );
};

export default SlideSeven;