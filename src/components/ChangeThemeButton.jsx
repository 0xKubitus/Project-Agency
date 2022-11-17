import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import styled from "styled-components";

const ThemeModeBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ColorThemeButton = styled.button`
    cursor: pointer;
    border: none;
    color: orange;
    background-color: transparent;
`;

function ChangeThemeButton() {
    const { toggleTheme, theme } = useContext(ThemeContext);

    //clicking the button must save to localStorage the 'theme' setting:
    localStorage.clear(); // we can do this to avoid overloading the localStorage in this case as it's the only data we store inside localStorage.
    localStorage.setItem("theme", JSON.stringify(theme));

    console.log("localstorage =", localStorage.getItem("theme"));

    return (
        <ThemeModeBtnContainer>
            <ColorThemeButton onClick={() => toggleTheme()}>
                Change mode : {theme === "light" ? "☀️" : "🌒"}
            </ColorThemeButton>
        </ThemeModeBtnContainer>
    );
}

export default ChangeThemeButton;
