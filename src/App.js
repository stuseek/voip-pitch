import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Menu } from 'lucide-react';

// Import components
import Sidebar from './components/Sidebar';
import SlideOne from './components/slides/SlideOne';
import SlideTwo from './components/slides/SlideTwo';
import SlideThree from './components/slides/SlideThree';
import SlideFour from './components/slides/SlideFour';
import SlideFive from './components/slides/SlideFive';
import SlideSix from './components/slides/SlideSix';
import SlideSeven from './components/slides/SlideSeven';
import SlideEight from './components/slides/SlideEight';

// Import data
import { nodeData } from './data/nodeData';
import { teamMemberCosts } from './data/teamMemberCosts';

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedConfig, setSelectedConfig] = useState({
        telephony: 'Twilio (Cloud)',
        stt: 'Deepgram (Cloud)',
        llm: 'OpenAI GPT-4 (Cloud)',
        tts: 'ElevenLabs (Cloud)'
    });

    const slides = [
        {
            id: 1,
            title: "Overview of the Customer's Request",
            component: <SlideOne />
        },
        {
            id: 2,
            title: "Defining \"Human-Like\" Conversations",
            component: <SlideTwo />
        },
        {
            id: 3,
            title: "HIPAA Compliance Considerations",
            component: <SlideThree />
        },
        {
            id: 4,
            title: "Out-of-the-Box (OOTB) Solutions",
            component: <SlideFour />
        },
        {
            id: 5,
            title: "OOTB Solutions - Costs & Performance",
            component: <SlideFive />
        },
        {
            id: 6,
            title: "On-Premises Solutions",
            component: <SlideSix />
        },
        {
            id: 7,
            title: "Architecture Diagram",
            component: <SlideSeven />
        },
        {
            id: 8,
            title: "Interactive Constructor",
            component: <SlideEight
                nodeData={nodeData}
                selectedConfig={selectedConfig}
                setSelectedConfig={setSelectedConfig} />
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 1) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const goToSlide = (slideNumber) => {
        setCurrentSlide(slideNumber);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-slate-50 to-slate-100 text-slate-800">
            {/* Mobile Menu Button */}
            <div className="md:hidden p-4 flex justify-between items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <h1 className="text-xl font-bold">AI Phone Assistant</h1>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar - hidden on mobile unless menu opened */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block md:w-72 bg-white shadow-lg z-10 md:h-screen overflow-auto border-r border-slate-200`}>
                <Sidebar
                    slides={slides}
                    currentSlide={currentSlide}
                    goToSlide={goToSlide}
                />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Slide Content */}
                <div className="flex-1 overflow-y-auto">
                    {slides.find(slide => slide.id === currentSlide)?.component}
                </div>

                {/* Navigation Buttons */}
                <div className="bg-white p-4 flex justify-between items-center border-t border-slate-200 shadow-md">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 1}
                        className={`flex items-center px-4 py-2 rounded-md transition-all ${
                            currentSlide === 1
                                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg'
                        }`}
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Previous
                    </button>

                    <div className="flex space-x-2">
                        {slides.map(slide => (
                            <button
                                key={slide.id}
                                onClick={() => goToSlide(slide.id)}
                                className={`w-4 h-4 rounded-full transition-all ${
                                    currentSlide === slide.id
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 scale-125'
                                        : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                                aria-label={`Go to slide ${slide.id}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length}
                        className={`flex items-center px-4 py-2 rounded-md transition-all ${
                            currentSlide === slides.length
                                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg'
                        }`}
                    >
                        Next
                        <ArrowRight size={16} className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default App;