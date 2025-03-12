import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const SlideFour = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Out-of-the-Box (OOTB) Solutions</h2>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4">What are OOTB Solutions?</h3>
                <p>Out-of-the-box solutions leverage ready-made cloud services for the phone assistant. "OOTB" means using third-party APIs and platforms (mostly cloud-based) that provide speech and AI capabilities, instead of building our own from scratch.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Example OOTB Solution Architecture</h3>
                <p className="mb-4">One approach is to integrate several cloud services in a pipeline:</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Telephony</h4>
                        <ul className="list-disc pl-5">
                            <li>Twilio Programmable Voice</li>
                            <li>Vonage Voice API</li>
                            <li>Amazon Connect</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">STT (Speech-to-Text)</h4>
                        <ul className="list-disc pl-5">
                            <li>Google Cloud Speech-to-Text</li>
                            <li>Azure Cognitive Services Speech</li>
                            <li>Deepgram</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Conversation / LLM</h4>
                        <ul className="list-disc pl-5">
                            <li>OpenAI (GPT-4/GPT-3.5) via API</li>
                            <li>Azure OpenAI Service</li>
                            <li>Google Dialogflow</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">TTS (Text-to-Speech)</h4>
                        <ul className="list-disc pl-5">
                            <li>Amazon Polly</li>
                            <li>Google Cloud TTS</li>
                            <li>Microsoft Azure TTS</li>
                            <li>ElevenLabs</li>
                        </ul>
                    </div>
                </div>

                <p>All these pieces can be tied together relatively quickly using their APIs to create a complete solution.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-green-700">Pros of OOTB Solutions</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Fast Development:</strong> Much of the heavy lifting is handled by pre-built services, dramatically reducing development time for an MVP.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>State-of-the-Art Models:</strong> These services use advanced AI models maintained by big providers, generally more accurate than what a small team could develop.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Scalability & Maintenance:</strong> Cloud providers handle scaling the AI models and continuously update them. No need to manage infrastructure.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Lower Upfront Cost:</strong> Pay-as-you-go pricing means little or no upfront fee. For an MVP or pilot, costs remain low if call volume is small.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-red-700">Cons of OOTB Solutions</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Recurring Usage Costs:</strong> Usage-based pricing can add up. At scale (thousands of calls), that becomes a significant ongoing expense.</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Latency Concerns:</strong> Using multiple cloud services introduces network delays between each component, potentially causing noticeable pauses before the assistant responds.</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Data Privacy & Compliance:</strong> Sending audio and transcripts to third-party clouds raises compliance questions, especially for healthcare and regulated industries.</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Limited Customization:</strong> You're somewhat at the mercy of the providers' capabilities. For instance, you can't fine-tune OpenAI's LLM on proprietary data without exposing that data.</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Vendor Lock-in:</strong> Relying on specific cloud services can create dependency. If a provider raises prices or changes terms, you have limited leverage.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4">Key Considerations</h3>
                <p>When evaluating OOTB solutions, carefully weigh development speed against long-term costs. The next slide will provide specific cost and performance metrics to help you make an informed decision.</p>
            </div>
        </div>
    );
};

export default SlideFour;