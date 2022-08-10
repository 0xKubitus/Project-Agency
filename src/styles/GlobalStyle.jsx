import { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from 'context/ThemeContext';

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
    }

    body {

      /* Ici cette syntaxe revient au même que
        background-color: ${({ props }) =>
            props.isDarkMode ? '#2F2E41' : 'white'};
        */

        background-color: ${({ isDarkMode }) =>
            isDarkMode ? 'black' : 'white'};
            
        margin: 0;
    }

    a {
        font-weight: bold;
    }

    // /* --------------------------------------------------------------------- */
    // /* BELOW STUFF IS TO BE REMOVED = ONLY USEFULL TO HELP FIND WHAT IS WHAT */

    .App {
        text-align: center;
        border: 1px solid black;
        margin: 2px 2px 2px 2px;
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

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}
