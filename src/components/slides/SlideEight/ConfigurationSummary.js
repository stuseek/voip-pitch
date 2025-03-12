import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';
import { getMetricColor } from './MetricUtils';

const ConfigurationSummary = ({ metrics }) => {

    return (
        <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl shadow-md mt-8 border border-slate-200">
            <h3 className="text-xl font-bold mb-4">Configuration Summary</h3>
            <p className="mb-4 text-slate-700">
                Your current configuration is a <strong>{metrics.deploymentType}</strong> solution with
                <strong className={getMetricColor('latency', metrics.totalLatency)}> {metrics.totalLatency < 500 ? 'excellent' : metrics.totalLatency < 800 ? 'good' : metrics.totalLatency < 1000 ? 'acceptable' : 'poor'} latency</strong> and
                <strong className={getMetricColor('realism', metrics.avgRealism)}> {
                    metrics.avgRealism >= 9 ? 'excellent' :
                        metrics.avgRealism >= 7 ? 'good' :
                            'moderate'
                } realism</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                    <h4 className="font-semibold mb-2 text-blue-800 flex items-center">
                        <CheckCircle size={18} className="text-blue-600 mr-2" />
                        Advantages
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                        {metrics.deploymentType === "Full Cloud" && (
                            <>
                                <li>Rapid deployment with minimal upfront investment</li>
                                <li>State-of-the-art AI models with automatic updates</li>
                                <li>Easily scales with demand</li>
                            </>
                        )}
                        {metrics.deploymentType === "Full On-Premises" && (
                            <>
                                <li>Complete data control for highest security and compliance</li>
                                <li>Lower ongoing costs once implemented</li>
                                <li>Potential for custom optimizations and integrations</li>
                            </>
                        )}
                        {metrics.deploymentType === "Hybrid" && (
                            <>
                                <li>Balance of control and convenience</li>
                                <li>Can keep sensitive components in-house</li>
                                <li>Flexible approach to scaling different components</li>
                            </>
                        )}
                        {metrics.totalLatency < 800 && (
                            <li>Responsive conversation flow with minimal delays</li>
                        )}
                        {metrics.avgRealism >= 8 && (
                            <li>Highly realistic experience for callers</li>
                        )}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                    <h4 className="font-semibold mb-2 text-amber-800 flex items-center">
                        <AlertTriangle size={18} className="text-amber-600 mr-2" />
                        Considerations
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                        {metrics.deploymentType === "Full Cloud" && (
                            <>
                                <li>Ongoing usage costs scale with volume</li>
                                <li>Potential data privacy and compliance challenges</li>
                            </>
                        )}
                        {metrics.deploymentType === "Full On-Premises" && (
                            <>
                                <li>Significant upfront implementation cost</li>
                                <li>Requires dedicated technical staff for maintenance</li>
                            </>
                        )}
                        {metrics.deploymentType === "Hybrid" && (
                            <>
                                <li>More complex integration between components</li>
                                <li>May require expertise in both cloud and on-prem systems</li>
                            </>
                        )}
                        {metrics.totalLatency > 800 && (
                            <li>Response delays may be noticeable to callers</li>
                        )}
                        {metrics.avgRealism < 8 && (
                            <li>Caller experience may feel less natural or AI-like</li>
                        )}
                        {metrics.costPerMin > 0.05 && (
                            <li>Higher per-minute costs may be significant at scale</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ConfigurationSummary;