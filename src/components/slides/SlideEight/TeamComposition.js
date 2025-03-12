import React from 'react';
import { User, Users, Clock } from 'lucide-react';
import { teamMemberCost } from './MetricUtils';

const TeamComposition = ({ teamHours, implementationType }) => {
    if (!teamHours) return null;

    // Calculate total hours
    const totalHours = Object.values(teamHours).reduce((sum, hours) => sum + hours, 0);

    // Calculate total cost
    const totalCost = Object.entries(teamHours).reduce((sum, [role, hours]) => {
        return sum + (hours * teamMemberCost[role]);
    }, 0);

    // Format role name for display
    const formatRoleName = (role) => {
        if (role === 'ml_engineer') return 'ML Engineer';
        if (role === 'devops') return 'DevOps';
        if (role === 'qa') return 'QA Engineer';
        if (role === 'manager') return 'Project Manager';
        if (role === 'backend') return 'Backend Dev';
        return role.charAt(0).toUpperCase() + role.slice(1);
    };

    // Get role color based on role
    const getRoleColor = (role) => {
        switch (role) {
            case 'devops': return 'bg-blue-100 text-blue-800';
            case 'qa': return 'bg-green-100 text-green-800';
            case 'manager': return 'bg-purple-100 text-purple-800';
            case 'backend': return 'bg-indigo-100 text-indigo-800';
            case 'ml_engineer': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 mt-4">
            <h4 className="font-semibold mb-4 flex items-center">
                <Users size={18} className="mr-2 text-slate-600" />
                {implementationType === 'mvp' ? 'MVP Team Composition' : 'Full Implementation Team'}
            </h4>

            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-700 flex items-center">
                    <Clock size={14} className="mr-1 text-slate-500" />
                    Total Hours
                </span>
                <span className="font-bold text-slate-900">{totalHours}</span>
            </div>

            <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-slate-700">Estimated Cost</span>
                <span className="font-bold text-slate-900">${Math.round(totalCost).toLocaleString()}</span>
            </div>

            <div className="space-y-3">
                {Object.entries(teamHours)
                    .filter(([_, hours]) => hours > 0)
                    .sort((a, b) => b[1] - a[1]) // Sort by hours in descending order
                    .map(([role, hours]) => (
                        <div key={role} className="flex items-center justify-between">
                            <div className="flex items-center">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 ${getRoleColor(role)}`}>
                                    <User size={12} className="mr-1" />
                                    {formatRoleName(role)}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className="text-sm text-slate-600 mr-2">{hours} hrs</span>
                                <span className="text-xs text-slate-500">(${teamMemberCost[role]}/hr)</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TeamComposition;