import React from 'react';

const SlideTwo = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-6">What Makes a Conversation "Human-Like"?</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Voice Realism</h3>
                    <p>Natural sound with proper tone, pace, and even filler words (e.g., "um," "hmm") to avoid robotic speech. Neural TTS engines inject emotion and cadence that closely resemble human speakers.</p>
                    <div className="mt-4 bg-blue-50 p-4 rounded">
                        <p className="text-sm font-semibold">Impact on Caller Experience:</p>
                        <p className="text-sm">Callers feel at ease, as if a real person is speaking, leading to more natural interactions.</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Latency (Response Speed)</h3>
                    <p>Human conversation has very short gaps between turns. The AI assistant should ideally respond within a fraction of a second after the caller stops speaking.</p>
                    <div className="mt-4 bg-blue-50 p-4 rounded">
                        <p className="text-sm font-semibold">Research shows:</p>
                        <p className="text-sm">About 500ms response time is typical in normal dialogue</p>
                        <p className="text-sm">Delays beyond 800ms feel unnatural and robotic</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Interruptions & Turn-Taking</h3>
                    <p>The assistant must handle interruptions gracefully with barge-in capability. If the caller starts speaking while the assistant is talking, the system should detect it and pause.</p>
                    <div className="mt-4 bg-blue-50 p-4 rounded">
                        <p className="text-sm font-semibold">Implementation Needs:</p>
                        <p className="text-sm">Real-time voice activity detection</p>
                        <p className="text-sm">Interruption handling logic</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Context & Coherence</h3>
                    <p>A human-like conversation stays on topic and remembers context. The AI should maintain state – for example, recalling the caller's name or issue mentioned earlier.</p>
                    <div className="mt-4 bg-blue-50 p-4 rounded">
                        <p className="text-sm font-semibold">Key Component:</p>
                        <p className="text-sm">LLM with sufficient context window to maintain conversation history</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Natural Language Understanding</h3>
                    <p>The assistant needs to understand various ways a caller might speak. Humans use slang, vary phrasing, or make mistakes. The system should robustly interpret meaning.</p>
                    <div className="mt-4 bg-blue-50 p-4 rounded">
                        <p className="text-sm font-semibold">Technologies:</p>
                        <p className="text-sm">Powerful Speech-to-Text (STT)</p>
                        <p className="text-sm">Robust language models (LLM)</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-blue-600">Speaking Mannerisms</h3>
                    <p>Little behaviors like polite phrasing ("Sure, I can help with that!"), acknowledging ("I see."), or subtle emotional tone contribute to a human-like impression.</p>
                    <div className="mt-4 bg-blue-50 p-4 rounded">
                        <p className="text-sm font-semibold">Implementation:</p>
                        <p className="text-sm">These mannerisms can be designed into dialogue prompts and responses</p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4">Summary</h3>
                <p>Hyperrealism in conversation is achieved by combining top-tier voice synthesis, fast and accurate speech recognition, and intelligent dialogue management. The outcome should be an AI that not only talks like a human but also listens and reacts like one.</p>
            </div>
        </div>
    );
};

export default SlideTwo;