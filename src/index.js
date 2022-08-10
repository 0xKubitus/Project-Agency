import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'pages/Home';
import About from 'pages/About';
import Works from 'pages/Works';

import { ThemeProvider } from 'context/ThemeContext';

import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <Header />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/works" element={<Works />} />
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
