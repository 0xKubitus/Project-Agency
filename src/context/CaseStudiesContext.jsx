import { createContext, useState } from "react";

// export const CaseStudiesContext = createContext("list");
export const CaseStudiesContext = createContext("cards");

export const DisplayModeProvider = ({ children }) => {
    // const [mode, setMode] = useState("list");
    // const [mode, setMode] = useState("cards");
    const [displayMode, setDisplayMode] = useState("cards");

    const toggleDisplayMode = () => {
        console.log("toggled");
        // setMode(mode === "list" ? "cards" : "list");
        setDisplayMode(displayMode === "cards" ? "list" : "cards");

        console.log("displayMode =", displayMode);
    };

    return <CaseStudiesContext.Provider value={{ displayMode, toggleDisplayMode }}>{children}</CaseStudiesContext.Provider>;
};
