import React from 'react';

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex items-center space-x-6">
                <h1 className="text-xl font-bold text-blue-600">URL Shortener</h1>
                <nav className="flex space-x-4 text-sm font-medium">
                    <a href="/" className="text-blue-600 border-b-2 border-blue-600 pb-1">Dashboard</a>
                    <a href="/healthz" className="text-gray-600 hover:text-blue-600 pb-1">Healthcheck</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;