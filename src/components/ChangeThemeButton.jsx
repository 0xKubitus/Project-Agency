import styled from 'styled-components';

const ThemeModeBtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ColorThemeButton = styled.button`
    border: none;
    color: orange;
    background-color: transparent;
`;

function ChangeThemeButton() {
    return (
        <ThemeModeBtnContainer>
            <ColorThemeButton>dark:🌒 light:☀️</ColorThemeButton>
        </ThemeModeBtnContainer>
    );
}

export default ChangeThemeButton;
