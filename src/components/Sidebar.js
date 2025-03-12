import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mic, Shield, Cloud, Server, Cpu, Cog, Calendar, Database } from 'lucide-react';

const Sidebar = ({ slides, currentSlide, goToSlide }) => {
    // Define icons for each slide
    const slideIcons = {
        1: <Phone size={18} />,
        2: <Mic size={18} />,
        3: <Shield size={18} />,
        4: <Cloud size={18} />,
        5: <Cloud size={18} />,
        6: <Server size={18} />,
        7: <Cpu size={18} />,
        8: <Database size={18} />, // New icon for Integrations
        9: <Cog size={18} />,
        10: <Calendar size={18} />
    };

    return (
        <div className="h-full flex flex-col">
            <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <Link to="/slide/1" className="block">
                    <h1 className="text-2xl font-bold">AI Phone Assistant</h1>
                    <p className="text-sm text-blue-100 mt-1">24/7 Hyperrealistic Conversations</p>
                </Link>
            </div>

            <nav className="flex-1 p-4">
                <h2 className="px-3 py-2 text-sm font-medium text-slate-500 uppercase tracking-wider">Table of Contents</h2>
                <ul className="mt-2 space-y-1">
                    {slides.map(slide => (
                        <li key={slide.id}>
                            <Link
                                to={`/slide/${slide.id}`}
                                className={`block w-full px-3 py-3 text-left rounded-lg transition-all flex items-center ${
                                    currentSlide === slide.id
                                        ? 'bg-blue-50 text-blue-700 font-medium'
                                        : 'text-slate-700 hover:bg-slate-100'
                                }`}
                            >
                                <div className={`mr-3 w-7 h-7 flex items-center justify-center rounded-full ${
                                    currentSlide === slide.id
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                                        : 'bg-slate-200 text-slate-700'
                                }`}>
                                    {slideIcons[slide.id] || slide.id}
                                </div>
                                <span className="text-sm">{slide.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 border-t border-slate-200 text-center text-xs text-slate-500">
                <p>© 2025 Digital8 IT Consulting & Business Development</p>
                <p className="mt-1">Designed with ❤️ for better customer service</p>
            </div>
        </div>
    );
};

export default Sidebar;