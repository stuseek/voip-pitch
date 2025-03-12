import React from 'react';
import { FileDown, Cloud, Server } from 'lucide-react';
import { getLatencyRating, getMetricColor } from './MetricUtils';

const PerformanceMetrics = ({ metrics }) => {

    return (
        <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 h-full">
            <h3 className="text-xl font-bold mb-6 text-center">Performance Metrics</h3>

            <div className="space-y-4">
                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-700 mb-2">Deployment Type</h4>
                    <div className="text-lg font-medium flex items-center">
                        {metrics.deploymentType === "Full Cloud" ? (
                            <Cloud size={18} className="text-blue-500 mr-2"/>
                        ) : metrics.deploymentType === "Full On-Premises" ? (
                            <Server size={18} className="text-green-500 mr-2"/>
                        ) : (
                            <>
                                <Cloud size={18} className="text-blue-500 mr-1"/>
                                <Server size={18} className="text-green-500 mr-2"/>
                            </>
                        )}
                        {metrics.deploymentType}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-700 mb-2">Total Latency</h4>
                    <div className="text-lg font-medium">
                        <span className={getMetricColor('latency', metrics.totalLatency)}>
                            {metrics.totalLatency}ms
                        </span>
                        <span className="text-sm ml-2 text-slate-500">({getLatencyRating(metrics.totalLatency)})</span>
                    </div>

                    <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
                        <div
                            className={`h-2 rounded-full ${
                                metrics.totalLatency < 500
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                                    : metrics.totalLatency < 800
                                        ? 'bg-gradient-to-r from-yellow-400 to-amber-500'
                                        : 'bg-gradient-to-r from-red-500 to-rose-500'
                            }`}
                            style={{width: `${Math.min(100, (metrics.totalLatency / 1500) * 100)}%`}}
                        ></div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-700 mb-2">Realism Score</h4>
                    <div className="text-lg font-medium">
                        <span className={getMetricColor('realism', metrics.avgRealism)}>
                            {metrics.avgRealism}/10
                        </span>
                    </div>

                    <div className="mt-2 w-full bg-slate-200 rounded-full h-2">
                        <div
                            className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                            style={{width: `${(metrics.avgRealism / 10) * 100}%`}}
                        ></div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-700 mb-2">HIPAA Compliance</h4>
                    <div className="text-lg font-medium">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                            metrics.complianceLevel === "High"
                                ? 'bg-green-100 text-green-800'
                                : metrics.complianceLevel === "Medium"
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-red-100 text-red-800'
                        }`}>
                            {metrics.complianceLevel}
                        </span>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-700 mb-2">Cost Per Minute</h4>
                    <div className="text-lg font-medium">
                        <span className={getMetricColor('cost', metrics.costPerMin)}>
                            ${metrics.costPerMin.toFixed(3)}
                        </span>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">Cost Estimates</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-700">Monthly (24/7):</span>
                            <span className="font-medium text-amber-800">${metrics.totalCostMonthly}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-700">MVP Development:</span>
                            <span
                                className="font-medium text-amber-800">${Math.round(metrics.mvpCost).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-700">Full Implementation:</span>
                            <span
                                className="font-medium text-amber-800">${Math.round(metrics.fullCost).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-700">Annual Support:</span>
                            <span
                                className="font-medium text-amber-800">${Math.round(metrics.annualSupportCost).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            </div>

            <button
                className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center">
                <FileDown size={16} className="mr-2"/>
                Export Configuration
            </button>
        </div>
    );
}
export default PerformanceMetrics;