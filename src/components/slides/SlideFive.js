import React from 'react';

const SlideFive = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-6">OOTB Solutions - Costs & Performance</h2>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Latency and Performance</h3>
                <p className="mb-4">In an OOTB approach, each component's latency adds up:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Typical Latencies</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Cloud STT: ~200ms delay for partial results</li>
                            <li>LLM: 500ms–1000ms to generate a short response</li>
                            <li>TTS: 200ms–500ms to produce audio</li>
                            <li><strong>Total round-trip:</strong> ~1 second delay</li>
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Optimization Strategies</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Parallel processing (starting TTS while LLM is still finishing)</li>
                            <li>Using faster models with some quality trade-offs</li>
                            <li>Sending interim responses ("Hmm, let me check...")</li>
                            <li>Using streaming APIs when available</li>
                        </ul>
                    </div>
                </div>
                <p className="italic text-sm text-gray-600">Note: For truly natural conversation, aim to keep total round-trip under 0.5-0.8 seconds.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Cost Breakdown</h3>
                <p className="mb-4">Estimated costs for cloud components (for one 1-minute conversation):</p>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                        <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-4 text-left">Component</th>
                            <th className="py-3 px-4 text-right">Cost per Minute</th>
                            <th className="py-3 px-4 text-left">Notes</th>
                        </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-3 px-4">Telephony (Twilio/Vonage)</td>
                            <td className="py-3 px-4 text-right">$0.015</td>
                            <td className="py-3 px-4">For PSTN connectivity</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-3 px-4">STT (cloud API)</td>
                            <td className="py-3 px-4 text-right">$0.02–$0.03</td>
                            <td className="py-3 px-4">E.g., Amazon Lex STT ~$0.026/min</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-3 px-4">LLM (OpenAI GPT-4)</td>
                            <td className="py-3 px-4 text-right">$0.01–$0.05</td>
                            <td className="py-3 px-4">Depends on prompt size and complexity</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-3 px-4">LLM (OpenAI GPT-3.5)</td>
                            <td className="py-3 px-4 text-right">$0.001–$0.005</td>
                            <td className="py-3 px-4">Much cheaper but less capable</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-3 px-4">TTS (standard voices)</td>
                            <td className="py-3 px-4 text-right">$0.010–$0.015</td>
                            <td className="py-3 px-4">Based on ~150 words per minute</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-3 px-4">TTS (premium neural voices)</td>
                            <td className="py-3 px-4 text-right">$0.015–$0.030</td>
                            <td className="py-3 px-4">E.g., ElevenLabs or premium Azure voices</td>
                        </tr>
                        <tr className="bg-blue-50 font-medium">
                            <td className="py-3 px-4">Total per minute</td>
                            <td className="py-3 px-4 text-right">$0.04–$0.10</td>
                            <td className="py-3 px-4">Scales linearly with call volume</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-700 mb-2">Monthly Cost Projection</h4>
                    <p>For a system handling 100 calls per day (avg. 5 minutes each):</p>
                    <p className="font-semibold mt-2">$0.07/min × 5 min × 100 calls × 30 days = $1,050/month</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">MVP Cost</h3>
                    <p className="mb-2">Using OOTB services, the MVP cost is primarily development labor:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>No big upfront license or hardware expense</li>
                        <li>Development: 1-2 months (2-3 developers)</li>
                        <li>Small budget for testing services</li>
                        <li><span className="font-bold">Estimated cost: $20,000-$50,000</span></li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">Full Implementation Cost</h3>
                    <p className="mb-2">Moving from MVP to production:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Integration with CRM, databases, etc.</li>
                        <li>Setting up monitoring and analytics</li>
                        <li>Quality assurance and testing</li>
                        <li>Fine-tuning prompts and responses</li>
                        <li><span className="font-bold">Estimated cost: $50,000-$120,000</span></li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">Annual Support Cost</h3>
                    <p className="mb-2">Ongoing maintenance for cloud solution:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Premium support plans from providers</li>
                        <li>DevOps hours for monitoring</li>
                        <li>Occasional prompt engineering</li>
                        <li>Relatively low fixed costs</li>
                        <li><span className="font-bold">Estimated cost: $15,000-$30,000/year</span></li>
                    </ul>
                    <p className="mt-2 text-sm font-medium text-gray-600">*Plus usage-based costs</p>
                </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4">Summary</h3>
                <p>OOTB cloud solutions offer quick time-to-market and leverage best-in-class AI, but require careful consideration of operational costs, latency tuning, and data compliance.</p>
                <p className="mt-2">Consider hybrid approaches where sensitive processing stays on-premises while leveraging cloud services for other components.</p>
            </div>
        </div>
    );
};

export default SlideFive;