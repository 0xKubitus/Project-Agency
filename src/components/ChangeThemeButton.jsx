import { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import styled from 'styled-components';

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

    return (
        <ThemeModeBtnContainer>
            <ColorThemeButton onClick={() => toggleTheme()}>
                Change mode : {theme === 'light' ? '☀️' : '🌒'}
            </ColorThemeButton>
        </ThemeModeBtnContainer>
    );
}

export default ChangeThemeButton;
