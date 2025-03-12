import React from 'react';
import { Phone, Mic, Cpu, CheckCircle } from 'lucide-react';

const SlideOne = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Overview of the Customer's Request</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <Phone className="text-blue-600 mr-3" size={24} />
                        <h3 className="text-xl font-semibold">24/7 Availability</h3>
                    </div>
                    <p>Always-available phone agent that handles inbound calls without human intervention. Answers calls, understands queries, and responds helpfully at any time.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <Mic className="text-blue-600 mr-3" size={24} />
                        <h3 className="text-xl font-semibold">Hyperrealism</h3>
                    </div>
                    <p>Highly human-like voice and behavior, creating the impression callers are speaking to a real person. Uses advanced TTS with natural intonation and timing.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <Cpu className="text-blue-600 mr-3" size={24} />
                        <h3 className="text-xl font-semibold">Technical Scope</h3>
                    </div>
                    <p>Integration of speech recognition (STT), language model for conversation (LLM), and speech synthesis (TTS). Autonomously manages entire calls - answering questions, making appointments, or routing calls.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <CheckCircle className="text-blue-600 mr-3" size={24} />
                        <h3 className="text-xl font-semibold">Business Goals</h3>
                    </div>
                    <p>Improve customer service availability and consistency while reducing reliance on human staff. Keep user experience personal and engaging despite AI handling.</p>
                </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4">Solution Overview</h3>
                <p>This presentation outlines various approaches to building this AI Phone Assistant, comparing cloud-based, on-premises, and hybrid solutions. We'll analyze costs, performance, compliance, and provide an interactive tool to help you configure the optimal solution.</p>
            </div>
        </div>
    );
};

export default SlideOne;