import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Header from "components/Header";
import Home from "pages/Home";
import About from "pages/About";
import Works from "pages/Works";

import { ThemeProvider } from "context/ThemeContext";

import GlobalStyle from "styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <GlobalStyle />
                <Header />
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/works/" element={<Works />} />
                    </Routes>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
