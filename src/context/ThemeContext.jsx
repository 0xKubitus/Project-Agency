import { createContext, useState } from "react";

export const ThemeContext = createContext({ themeMode: "light" });

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.theme ? JSON.parse(localStorage.theme) : "light"
    );

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
