import React from 'react';
import { CheckCircle, AlertTriangle, Server } from 'lucide-react';

const SlideSix = () => {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-6">On-Premises Solutions</h2>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-start">
                    <Server className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={24} />
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700">What are On-Premises Solutions?</h3>
                        <p>On-premises (or self-hosted) solutions run the core components (telephony, STT, LLM, TTS) on servers under your control, rather than being fully managed by third-party cloud services.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-green-700">Pros of On-Prem Solutions</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Data Control & Privacy:</strong> All audio and data stay within your controlled servers, a significant advantage for HIPAA compliance and security.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Lower Variable Costs:</strong> While upfront cost is higher, the cost per conversation can be lower in the long run. You're not paying cloud fees for every API call.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Latency Optimization:</strong> Hosting components locally (and co-locating them) can reduce latency. Data doesn't travel over the internet between components.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Customizable & Flexible:</strong> You can choose exactly which models or software to use and integrate deeper with on-site systems.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>No Vendor Lock-in:</strong> You own the whole stack and can swap out components at will, with no dependency on a provider's roadmap.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>IP/Technology Ownership:</strong> If you develop custom models, that IP stays with you and could become a competitive advantage.</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4 text-red-700">Cons of On-Prem Solutions</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>High Initial Cost:</strong> You need to invest in infrastructure (servers with GPUs, telephony hardware) and more development effort to get everything working.</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Maintenance & DevOps Burden:</strong> Running AI models 24/7 means you need a DevOps pipeline for deployment, monitoring, and updating these models.</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Performance Tuning:</strong> While you have the potential for lower latency, achieving it requires optimization of each component (pruning models, compression, etc.).</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Capacity Constraints:</strong> If call volume spikes beyond what your hardware can handle, the system could become overloaded, increasing latency or failing calls.</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Complex Development:</strong> Integrating all components on-prem requires more custom development work compared to cloud APIs.</span>
                        </li>
                        <li className="flex items-start">
                            <AlertTriangle className="text-red-600 mr-2 flex-shrink-0 mt-1" size={18} />
                            <span><strong>Updates and Improvements Lag:</strong> You'd have to manually update to new versions or retrain models yourself, potentially falling behind state-of-art if not actively maintained.</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">MVP Cost</h3>
                    <p className="mb-2">On-premises MVP requires substantial investment:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Server hardware with GPUs</li>
                        <li>Development: 2-4 months</li>
                        <li>More specialized AI engineering</li>
                        <li><span className="font-bold">Estimated cost: $45,000-$75,000</span></li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">Full Implementation Cost</h3>
                    <p className="mb-2">Production-ready on-premises system:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Redundant server infrastructure</li>
                        <li>Custom model fine-tuning</li>
                        <li>More extensive testing</li>
                        <li>Security hardening</li>
                        <li><span className="font-bold">Estimated cost: $140,000-$200,000</span></li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4 text-blue-600">Annual Support Cost</h3>
                    <p className="mb-2">Ongoing maintenance is substantial:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Dedicated DevOps engineer(s)</li>
                        <li>AI engineer for model updates</li>
                        <li>Hardware maintenance/upgrades</li>
                        <li>High fixed costs, low variable costs</li>
                        <li><span className="font-bold">Estimated cost: $50,000-$80,000/year</span></li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-semibold mb-4">Decision Factors</h3>
                <p>On-prem solutions shine in control and potentially long-term cost savings, but come with significant engineering effort and upfront expense.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-white p-3 rounded">
                        <p className="font-semibold">Choose on-prem if:</p>
                        <ul className="list-disc pl-5 text-sm mt-1">
                            <li>Data privacy is paramount</li>
                            <li>Long-term scale is expected</li>
                            <li>You have AI expertise in-house</li>
                        </ul>
                    </div>
                    <div className="bg-white p-3 rounded">
                        <p className="font-semibold">Choose cloud if:</p>
                        <ul className="list-disc pl-5 text-sm mt-1">
                            <li>Speed to market is critical</li>
                            <li>Upfront budget is limited</li>
                            <li>Call volumes are unpredictable</li>
                        </ul>
                    </div>
                    <div className="bg-white p-3 rounded">
                        <p className="font-semibold">Consider hybrid if:</p>
                        <ul className="list-disc pl-5 text-sm mt-1">
                            <li>You need balance of control/cost</li>
                            <li>Certain data is sensitive, some isn't</li>
                            <li>Progressive implementation is desired</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideSix;