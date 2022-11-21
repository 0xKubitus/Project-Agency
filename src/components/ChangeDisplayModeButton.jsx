function ChangeDisplayModeButton(props) {
    const mode = props.mode;

    return (
        <div className="case-study-mode-toggler-container">
            <p style={{ fontSize: 18 }}>🔄 Toggle case-studies Display Mode:</p>

            <button className="case-study-mode-toggler-btn" onClick={() => props.toggle(mode === "cards" ? "list" : "cards")}>
                <p>
                    <span>Cards </span> ⇄ <span> List</span>
                </p>
            </button>
        </div>
    );
}

export default ChangeDisplayModeButton;
