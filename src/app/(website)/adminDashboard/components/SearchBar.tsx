import React from 'react';

const SearchBar = () => {
    return (
        <div className="search_bg mb-[134px] flex justify-center items-center">
            <div className="p-4 w-full max-w-[850px]">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full p-3 pl-4 pr-12 text-sm text-[#0A2C3D8A] bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                        style={{ boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.03)' }}
                    />
                    <button className="absolute inset-y-0 right-0 flex items-center px-4 text-[#4B5563]">
                        <svg
                            className="h-5 w-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;