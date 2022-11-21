import { createContext, useState } from "react";

export const CaseStudiesContext = createContext("cards");

export const DisplayModeProvider = ({ children }) => {
    const [displayMode, setDisplayMode] = useState("cards");

    const toggleDisplayMode = () => {
        setDisplayMode(displayMode === "cards" ? "list" : "cards");
    };

    return <CaseStudiesContext.Provider value={{ displayMode, toggleDisplayMode }}>{children}</CaseStudiesContext.Provider>;
};
