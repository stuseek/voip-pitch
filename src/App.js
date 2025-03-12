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
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Mobile Menu Button */}
            <div className="md:hidden p-4 flex justify-between items-center bg-blue-600 text-white">
                <h1 className="text-xl font-bold">AI Phone Assistant</h1>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-md hover:bg-blue-500 focus:outline-none"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Sidebar - hidden on mobile unless menu opened */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block md:w-64 bg-white shadow-md z-10 md:h-screen overflow-auto`}>
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
                <div className="bg-white p-4 flex justify-between items-center border-t">
                    <button
                        onClick={prevSlide}
                        disabled={currentSlide === 1}
                        className={`flex items-center px-4 py-2 rounded-md ${
                            currentSlide === 1
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Previous
                    </button>

                    <div className="text-gray-500">
                        {currentSlide} / {slides.length}
                    </div>

                    <button
                        onClick={nextSlide}
                        disabled={currentSlide === slides.length}
                        className={`flex items-center px-4 py-2 rounded-md ${
                            currentSlide === slides.length
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
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