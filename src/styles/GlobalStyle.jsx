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
        background-color: ${({ isDarkMode }) => (isDarkMode ? "#3a3a3a" : "#f2f3f4")};
        margin: 0;
    }

    a {
        font-weight: bold;
        color: #e83535;
        text-decoration: none;
    }

    .case-study-mode-toggler-container {

      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;

      padding-top: 10px;
      margin-bottom: 10px;
    }

    .case-study-mode-toggler-btn {
      border-radius: 25px;
      font-size: 20px;
      font-weight: bold;
      line-height: 10px;
      margin-left: 20px
    }

    .App {
        min-height: 90vh;
        text-align: center;
        margin: 2px 2px 2px 2px;
        color: ${({ isDarkMode }) => (isDarkMode ? "white" : "black")};
    }

    .navbar {
        display: flex;
        justify-content: space-around;
        margin: 2px 2px 2px 2px;
        border-bottom: 1px solid black;
        padding: 10px 0 10px 0;
    }


`;

function GlobalStyle() {
    const { theme } = useContext(ThemeContext);

    return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
}

export default GlobalStyle;
