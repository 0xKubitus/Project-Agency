import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "context/ThemeContext";

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
    }

    body {
        background-color: ${({ isDarkMode }) =>
            isDarkMode ? "#3a3a3a" : "#f2f3f4"};
        margin: 0;
    }

    a {
        font-weight: bold;
        color: #e83535;
        text-decoration: none;
    }

    // /* --------------------------------------------------------------------- */
    // /* BELOW STUFF IS TO BE REMOVED = ONLY USEFULL TO HELP FIND WHAT IS WHAT */

    .App {
        height: 100vh;
        text-align: center;
        border: 1px solid black;
        margin: 2px 2px 2px 2px;
        color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
    }

    .navbar {
        display: flex;
        justify-content: space-around;
        margin: 2px 2px 2px 2px;
    }

    .page-content {
        border: 1px solid green;
        margin: 2px 2px 2px 2px;
    }

    .preview-title {
        border: 1px solid orange;
        margin: 2px 2px 2px 2px;
    }

    .markdown-preview {
        border: 1px solid red;
        margin: 2px 2px 2px 2px;
    }
`;

function GlobalStyle() {
    const { theme } = useContext(ThemeContext);

    return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
}

export default GlobalStyle;
