/**
 * Utility functions for handling metrics related to AI Phone Assistant components
 */

// Hourly rates for different team roles in USD
export const teamMemberCost = {
    devops: 85,       // DevOps specialist hourly rate
    qa: 75,            // QA engineer hourly rate
    manager: 80,      // Project manager hourly rate
    backend: 85,      // Backend developer hourly rate
    ml_engineer: 90   // Machine learning engineer hourly rate};
}

// Convert team hours to total cost
export const calculateTeamCost = (teamHours) => {
    if (!teamHours) return 0;

    return Object.entries(teamHours).reduce((total, [role, hours]) => {
        return total + (hours * teamMemberCost[role]);
    }, 0);
};

// Display latency rating based on ms
export const getLatencyRating = (ms) => {
    if (ms < 200) return "Excellent";
    if (ms < 500) return "Good";
    if (ms < 800) return "Acceptable";
    return "Poor";
};

// Get metrics color class based on value
export const getMetricColor = (metric, value) => {
    if (metric === "realism" || metric === "complianceLevel") {
        if (value >= 9 || value === "High") return "text-green-600";
        if (value >= 7 || value === "Medium") return "text-yellow-600";
        return "text-red-600";
    }
    if (metric === "latency") {
        if (value < 200) return "text-green-600";
        if (value < 500) return "text-yellow-600";
        return "text-red-600";
    }
    if (metric === "cost") {
        if (value < 0.03) return "text-green-600";
        if (value < 0.07) return "text-yellow-600";
        return "text-red-600";
    }
    return "text-slate-800";
};

// Get node background color based on type (cloud vs on-prem)
export const getNodeColor = (type) => {
    return type === "cloud"
        ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200"
        : "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200";
};

// Calculate metrics based on selected configuration
export const calculateMetrics = (selectedConfig, nodeData, getSelectedNodeDetails) => {
    const telephony = getSelectedNodeDetails('telephony');
    const stt = getSelectedNodeDetails('stt');
    const llm = getSelectedNodeDetails('llm');
    const tts = getSelectedNodeDetails('tts');

    if (!telephony || !stt || !llm || !tts) return null;

    const totalLatency = telephony.latency_ms + stt.latency_ms + llm.latency_ms + tts.latency_ms;
    const avgRealism = Math.round((telephony.realism + stt.realism + llm.realism + tts.realism) / 4);
    const costPerMin = telephony.cost_per_conversation_min + stt.cost_per_conversation_min +
        llm.cost_per_conversation_min + tts.cost_per_conversation_min;
    const annualSupportCost = telephony.annual_support_cost + stt.annual_support_cost +
        llm.annual_support_cost + tts.annual_support_cost;

    // Calculate MVP cost based on team hours
    const mvpCost = calculateTeamCost(telephony.mvp_cost) +
        calculateTeamCost(stt.mvp_cost) +
        calculateTeamCost(llm.mvp_cost) +
        calculateTeamCost(tts.mvp_cost);

    // Calculate full implementation cost based on team hours
    const fullCost = calculateTeamCost(telephony.full_implementation_cost) +
        calculateTeamCost(stt.full_implementation_cost) +
        calculateTeamCost(llm.full_implementation_cost) +
        calculateTeamCost(tts.full_implementation_cost);

    // Determine deployment type based on selections
    const allCloud = [telephony, stt, llm, tts].every(item => item.type === "cloud");
    const allOnPrem = [telephony, stt, llm, tts].every(item => item.type === "on-prem");
    let deploymentType = "Hybrid";
    if (allCloud) deploymentType = "Full Cloud";
    if (allOnPrem) deploymentType = "Full On-Premises";

    // Compliance level assessment
    let complianceLevel = "Medium";
    if (allOnPrem) complianceLevel = "High";
    if (allCloud) complianceLevel = "Low to Medium";

    // Calculate monthly cost (assuming 8 hours/day, 30 days/month)
    const totalCostMonthly = (costPerMin * 60 * 8 * 30).toFixed(2);

    // Calculate team composition
    const calculateTotalTeamHours = (implementationType) => {
        const components = [telephony, stt, llm, tts];
        const result = {
            devops: 0,
            qa: 0,
            manager: 0,
            backend: 0,
            ml_engineer: 0
        };

        components.forEach(component => {
            const hours = component[implementationType];
            if (hours) {
                Object.entries(hours).forEach(([role, hourCount]) => {
                    result[role] += hourCount;
                });
            }
        });

        return result;
    };

    const mvpTeamHours = calculateTotalTeamHours('mvp_cost');
    const fullTeamHours = calculateTotalTeamHours('full_implementation_cost');

    return {
        totalLatency,
        avgRealism,
        costPerMin,
        annualSupportCost,
        mvpCost,
        fullCost,
        deploymentType,
        complianceLevel,
        totalCostMonthly,
        mvpTeamHours,
        fullTeamHours
    };
};