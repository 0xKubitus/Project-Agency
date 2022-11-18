import { createContext, useState } from "react";

export const CaseStudiesContext = createContext("list");

export const DisplayModeProvider = ({ children }) => {
    const [mode, setMode] = useState("list");

    const toggleDisplayMode = () => {
        console.log("toggled");
        setMode(mode === "list" ? "cards" : "list");
    };

    return <CaseStudiesContext.Provider value={{ mode, toggleDisplayMode }}>{children}</CaseStudiesContext.Provider>;
};
