import { createContext, useState } from "react";

// export const CaseStudiesContext = createContext("list");
export const CaseStudiesContext = createContext("cards");

export const DisplayModeProvider = ({ children }) => {
    // const [mode, setMode] = useState("list");
    const [mode, setMode] = useState("cards");

    const toggleDisplayMode = () => {
        console.log("toggled");
        // setMode(mode === "list" ? "cards" : "list");
        setMode(mode === "cards" ? "list" : "cards");

        console.log("mode =", mode);
    };

    return <CaseStudiesContext.Provider value={{ mode, toggleDisplayMode }}>{children}</CaseStudiesContext.Provider>;
};
