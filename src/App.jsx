import React from "react";
import { useContext, useState, useEffect } from "react";
import { DisplayModeProvider, CaseStudiesContext } from "context/CaseStudiesContext";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import caseStudies from "data/caseStudies";
import homepageText from "data/homepageText";
import Header from "components/Header";
import Home from "pages/Home";
import About from "pages/About";
import Works from "pages/Works";
import Project from "components/Project";
import { ThemeProvider } from "context/ThemeContext";

import GlobalStyle from "styles/GlobalStyle";

const App = () => {
    const displayMode = useContext(CaseStudiesContext);
    // const [mode, setMode] = useState("");

    // console.log("displayMode in App =", mode);

    // useEffect(() => {
    //     setMode(displayMode);
    // }, [displayMode]);

    return (
        <React.StrictMode>
            <BrowserRouter>
                <ThemeProvider>
                    <GlobalStyle />
                    <Header />
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Home homepageText={homepageText} />} />
                            <Route path="/about" element={<About />} />

                            <Route path="/works" element={<Works caseStudies={caseStudies} mode={displayMode} />}>
                                <Route path=":workName" element={<Project />} />
                            </Route>
                        </Routes>
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
};
export default App;
