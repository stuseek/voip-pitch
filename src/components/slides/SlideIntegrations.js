import React, { useState } from 'react';
import { Database, BarChart3, ExternalLink, MessageSquare, CalendarClock, Activity, Users, ClipboardCheck, Layers } from 'lucide-react';

const SlideIntegrations = () => {
    const [activeTab, setActiveTab] = useState('crm');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'crm':
                return <CRMIntegration />;
            case 'analytics':
                return <AnalyticsIntegration />;
            case 'scheduling':
                return <SchedulingIntegration />;
            default:
                return <CRMIntegration />;
        }
    };

    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Enterprise Integrations</h2>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Why Integrate?</h3>
                <p className="mb-4">
                    The AI Phone Assistant becomes exponentially more valuable when integrated with your existing enterprise systems.
                    Well-designed integrations ensure the assistant has access to up-to-date information, can update records in real-time,
                    and deliver insights into your business analytics platforms.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center text-center">
                        <Database className="text-blue-600 mb-2" size={24} />
                        <h4 className="font-medium text-blue-800">Data Continuity</h4>
                        <p className="text-sm text-blue-700 mt-1">Seamless flow of information between systems</p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg flex flex-col items-center text-center">
                        <Users className="text-purple-600 mb-2" size={24} />
                        <h4 className="font-medium text-purple-800">360° Customer View</h4>
                        <p className="text-sm text-purple-700 mt-1">Complete context during every conversation</p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center text-center">
                        <Activity className="text-green-600 mb-2" size={24} />
                        <h4 className="font-medium text-green-800">Business Intelligence</h4>
                        <p className="text-sm text-green-700 mt-1">Turn conversations into actionable insights</p>
                    </div>
                </div>
            </div>

            {/* Integration Type Tabs */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex border-b border-slate-200">
                    <button
                        className={`flex-1 py-3 px-4 font-medium flex items-center justify-center ${
                            activeTab === 'crm'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                        onClick={() => setActiveTab('crm')}
                    >
                        <Database size={18} className="mr-2" />
                        CRM Systems
                    </button>
                    <button
                        className={`flex-1 py-3 px-4 font-medium flex items-center justify-center ${
                            activeTab === 'analytics'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                        onClick={() => setActiveTab('analytics')}
                    >
                        <BarChart3 size={18} className="mr-2" />
                        Analytics
                    </button>
                    <button
                        className={`flex-1 py-3 px-4 font-medium flex items-center justify-center ${
                            activeTab === 'scheduling'
                                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                                : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                        }`}
                        onClick={() => setActiveTab('scheduling')}
                    >
                        <CalendarClock size={18} className="mr-2" />
                        Scheduling
                    </button>
                </div>

                <div className="p-6">
                    {renderTabContent()}
                </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg shadow-md mt-6 border border-slate-200">
                <h3 className="text-xl font-semibold mb-4">Integration Architecture</h3>
                <p className="mb-4">
                    The AI Phone Assistant uses a secure API gateway to communicate with various enterprise systems.
                    This modular approach allows for flexible integration with both cloud and on-premises systems,
                    while maintaining robust security protocols.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-7 gap-4 mt-6 items-center">
                    <div className="md:col-span-2 bg-blue-100 p-4 rounded-lg text-center border border-blue-200">
                        <h4 className="font-medium text-blue-800 mb-2">AI Phone Assistant</h4>
                        <p className="text-sm text-blue-700">Conversation Engine</p>
                    </div>

                    <div className="md:col-span-1 flex justify-center">
                        <div className="w-8 h-8 border-t-2 border-r-2 border-blue-400 transform rotate-45 md:rotate-0"></div>
                    </div>

                    <div className="md:col-span-1 bg-slate-100 p-4 rounded-lg text-center border border-slate-200">
                        <h4 className="font-medium text-slate-800 mb-2">API Gateway</h4>
                        <p className="text-sm text-slate-700">Secure Middleware</p>
                    </div>

                    <div className="md:col-span-1 flex justify-center">
                        <div className="w-8 h-8 border-t-2 border-r-2 border-blue-400 transform rotate-45 md:rotate-0"></div>
                    </div>

                    <div className="md:col-span-2 bg-indigo-100 p-4 rounded-lg text-center border border-indigo-200">
                        <h4 className="font-medium text-indigo-800 mb-2">Enterprise Systems</h4>
                        <p className="text-xs text-indigo-700">CRM | Analytics | Scheduling | ERP | Knowledge Base</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CRMIntegration = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Database className="text-blue-600 mr-2" size={22} />
                CRM Integration
            </h3>

            <p className="mb-6">
                Connecting the AI Phone Assistant to your Customer Relationship Management (CRM) system allows the AI to access
                customer records, update information, and create tickets or opportunities in real-time during calls.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png" alt="Salesforce" className="h-6 mr-2" />
                        <h4 className="font-medium">Salesforce</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                        The assistant can query and update Salesforce records, create opportunities, and log interactions via the Salesforce API.
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1 mb-3">
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Customer 360 integration
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Service Cloud & Sales Cloud
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Einstein AI capabilities
                        </li>
                    </ul>
                    <a href="#" className="text-xs text-blue-600 flex items-center hover:underline">
                        Implementation details
                        <ExternalLink size={10} className="ml-1" />
                    </a>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Microsoft_Dynamics_365_logo.svg/1200px-Microsoft_Dynamics_365_logo.svg.png" alt="Dynamics 365" className="h-6 mr-2" />
                        <h4 className="font-medium">Microsoft Dynamics 365</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                        Integration with Dynamics 365 for customer data lookup, contact creation, and activity tracking through Dataverse.
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1 mb-3">
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            PowerAutomate workflows
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Customer Service Hub
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Power Platform compatibility
                        </li>
                    </ul>
                    <a href="#" className="text-xs text-blue-600 flex items-center hover:underline">
                        Implementation details
                        <ExternalLink size={10} className="ml-1" />
                    </a>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <img src="https://cdn.worldvectorlogo.com/logos/zendesk-1.svg" alt="Zendesk" className="h-6 mr-2" />
                        <h4 className="font-medium">Zendesk</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                        The assistant can create and update Zendesk tickets, reference customer history, and route cases appropriately.
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1 mb-3">
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Ticket management
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Call transcription storage
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Support metrics tracking
                        </li>
                    </ul>
                    <a href="#" className="text-xs text-blue-600 flex items-center hover:underline">
                        Implementation details
                        <ExternalLink size={10} className="ml-1" />
                    </a>
                </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                    <Layers size={16} className="mr-2" />
                    Integration Benefits
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <li className="text-sm text-blue-700 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Automatic call logging and transcripts
                    </li>
                    <li className="text-sm text-blue-700 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Up-to-date customer information
                    </li>
                    <li className="text-sm text-blue-700 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Real-time ticket creation/updates
                    </li>
                    <li className="text-sm text-blue-700 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        Personalized customer interactions
                    </li>
                </ul>
            </div>
        </div>
    );
};

const AnalyticsIntegration = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BarChart3 className="text-blue-600 mr-2" size={22} />
                Analytics Integration
            </h3>

            <p className="mb-6">
                Feed conversation data, call metrics, and customer interaction patterns into your business intelligence
                platforms to gain actionable insights and track performance over time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/1200px-New_Power_BI_Logo.svg.png" alt="Power BI" className="h-6 mr-2" />
                        <h4 className="font-medium">Power BI</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                        Export call data and metrics to Power BI for visual dashboards, trend analysis, and executive reporting.
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1 mb-3">
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Real-time dashboards
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Custom KPI visualizations
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            AI-powered analytics
                        </li>
                    </ul>
                    <a href="#" className="text-xs text-blue-600 flex items-center hover:underline">
                        Data schema documentation
                        <ExternalLink size={10} className="ml-1" />
                    </a>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/22/Logo_of_Tableau_Software.svg/1200px-Logo_of_Tableau_Software.svg.png" alt="Tableau" className="h-6 mr-2" />
                        <h4 className="font-medium">Tableau</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                        Connect call analytics to Tableau for deep explorative analysis and advanced visualizations.
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1 mb-3">
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Advanced data exploration
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Interactive visualizations
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Sentiment analysis charts
                        </li>
                    </ul>
                    <a href="#" className="text-xs text-blue-600 flex items-center hover:underline">
                        Data schema documentation
                        <ExternalLink size={10} className="ml-1" />
                    </a>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <img src="https://www.gstatic.com/analytics-suite/header/suite/v2/ic_analytics.svg" alt="Google Analytics" className="h-6 mr-2" />
                        <h4 className="font-medium">Google Analytics</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                        Track conversation funnels, conversion points, and user journeys through the phone assistant.
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1 mb-3">
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Conversion tracking
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Call flow funnel analysis
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Custom event tracking
                        </li>
                    </ul>
                    <a href="#" className="text-xs text-blue-600 flex items-center hover:underline">
                        Implementation guide
                        <ExternalLink size={10} className="ml-1" />
                    </a>
                </div>
            </div>

            <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                <h4 className="font-medium text-purple-800 mb-2 flex items-center">
                    <Layers size={16} className="mr-2" />
                    Analytics Capabilities
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <li className="text-sm text-purple-700 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Caller sentiment analysis
                    </li>
                    <li className="text-sm text-purple-700 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Common query identification
                    </li>
                    <li className="text-sm text-purple-700 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Call resolution metrics
                    </li>
                    <li className="text-sm text-purple-700 flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                        Conversion optimization
                    </li>
                </ul>
            </div>
        </div>
    );
};

const SchedulingIntegration = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CalendarClock className="text-blue-600 mr-2" size={22} />
                Scheduling Integration
            </h3>

            <p className="mb-6">
                Allow the AI assistant to access calendars, booking systems, and scheduling tools to make appointments,
                check availability, and send reminders automatically.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Google_Calendar_logo.svg/1024px-Google_Calendar_logo.svg.png" alt="Google Calendar" className="h-6 mr-2" />
                        <h4 className="font-medium">Google Calendar</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                        The assistant can check availability, create appointments, and send Google Calendar invites.
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1 mb-3">
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Real-time availability checking
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Automated invites
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Resource scheduling
                        </li>
                    </ul>
                    <a href="#" className="text-xs text-blue-600 flex items-center hover:underline">
                        API documentation
                        <ExternalLink size={10} className="ml-1" />
                    </a>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Microsoft_Office_Outlook_2019-present.svg/1200px-Microsoft_Office_Outlook_2019-present.svg.png" alt="Microsoft Outlook" className="h-6 mr-2" />
                        <h4 className="font-medium">Microsoft Outlook</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                        Seamlessly schedule meetings, check team availability, and manage bookings via Outlook's calendar.
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1 mb-3">
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Exchange integration
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Microsoft 365 compatibility
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Team scheduling
                        </li>
                    </ul>
                    <a href="#" className="text-xs text-blue-600 flex items-center hover:underline">
                        MS Graph API guide
                        <ExternalLink size={10} className="ml-1" />
                    </a>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <img src="https://images.ctfassets.net/k0lk9kiuza3o/2Fxrz7sX6W7cUUkMQEUCaM/a89c74c60366eb1d1fc0d1109facbcf2/calendly-primary-logo-blue.svg" alt="Calendly" className="h-6 mr-2" />
                        <h4 className="font-medium">Calendly</h4>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">
                        Direct integration with Calendly for streamlined booking flows and automated scheduling.
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1 mb-3">
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Automated scheduling links
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            SMS/Email confirmations
                        </li>
                        <li className="flex items-center">
                            <ClipboardCheck size={12} className="mr-1 text-green-500" />
                            Buffer time management
                        </li>
                    </ul>
                    <a href="#" className="text-xs text-blue-600 flex items-center hover:underline">
                        Webhooks documentation
                        <ExternalLink size={10} className="ml-1" />
                    </a>
                </div>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-800 mb-2 flex items-center">
                    <Layers size={16} className="mr-2" />
                    Scheduling Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <li className="text-sm text-green-700 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Automated appointment booking
                    </li>
                    <li className="text-sm text-green-700 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Calendar availability checks
                    </li>
                    <li className="text-sm text-green-700 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Rescheduling capabilities
                    </li>
                    <li className="text-sm text-green-700 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Reminder notifications
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SlideIntegrations;