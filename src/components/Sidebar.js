import React from 'react';

const Sidebar = ({ slides, currentSlide, goToSlide }) => {
    return (
        <div className="h-full flex flex-col">
            <div className="p-4 bg-blue-600 text-white">
                <h1 className="text-xl font-bold">AI Phone Assistant</h1>
                <p className="text-sm text-blue-100">24/7 Hyperrealistic Conversations</p>
            </div>

            <nav className="flex-1 p-2">
                <h2 className="px-3 py-2 text-sm font-medium text-gray-500">TABLE OF CONTENTS</h2>
                <ul className="mt-1 space-y-1">
                    {slides.map(slide => (
                        <li key={slide.id}>
                            <button
                                onClick={() => goToSlide(slide.id)}
                                className={`w-full px-3 py-2 text-left rounded-md text-sm ${
                                    currentSlide === slide.id
                                        ? 'bg-blue-50 text-blue-700 font-medium'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <span className="mr-2 text-blue-500 font-medium">{slide.id}.</span>
                                {slide.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="p-4 border-t text-center text-xs text-gray-500">
                <p>© 2025 AI Phone Assistant</p>
                <p className="mt-1">Designed with ❤️ for better customer service</p>
            </div>
        </div>
    );
};

export default Sidebar;