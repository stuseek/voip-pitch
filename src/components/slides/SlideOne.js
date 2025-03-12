import React from 'react';
import { Phone, Mic, Cpu, CheckCircle } from 'lucide-react';

const SlideOne = () => {
    return (
        <div className="p-8 space-y-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Overview of the Customer's Request</h2>
                <p className="text-slate-500 max-w-3xl mx-auto">Building a 24/7 AI phone assistant with hyperrealistic conversations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                            <Phone size={24} />
                        </div>
                        <h3 className="text-xl font-bold">24/7 Availability</h3>
                    </div>
                    <p className="text-slate-600">Always-available phone agent that handles inbound calls without human intervention. Answers calls, understands queries, and responds helpfully at any time.</p>
                </div>

                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                            <Mic size={24} />
                        </div>
                        <h3 className="text-xl font-bold">Hyperrealism</h3>
                    </div>
                    <p className="text-slate-600">Highly human-like voice and behavior, creating the impression callers are speaking to a real person. Uses advanced TTS with natural intonation and timing.</p>
                </div>

                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                            <Cpu size={24} />
                        </div>
                        <h3 className="text-xl font-bold">Technical Scope</h3>
                    </div>
                    <p className="text-slate-600">Integration of speech recognition (STT), language model for conversation (LLM), and speech synthesis (TTS). Autonomously manages entire calls - answering questions, making appointments, or routing calls.</p>
                </div>

                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200">
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-4">
                            <CheckCircle size={24} />
                        </div>
                        <h3 className="text-xl font-bold">Business Goals</h3>
                    </div>
                    <p className="text-slate-600">Improve customer service availability and consistency while reducing reliance on human staff. Keep user experience personal and engaging despite AI handling.</p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md mt-8 border border-blue-100">
                <h3 className="text-xl font-bold mb-4 text-blue-800">Solution Overview</h3>
                <p className="text-slate-700">This presentation outlines various approaches to building this AI Phone Assistant, comparing cloud-based, on-premises, and hybrid solutions. We'll analyze costs, performance, compliance, and provide an interactive tool to help you configure the optimal solution.</p>
            </div>
        </div>
    );
};

export default SlideOne;