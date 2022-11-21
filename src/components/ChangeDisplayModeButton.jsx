import { useContext } from "react";
import { CaseStudiesContext } from "context/CaseStudiesContext";

function ChangeDisplayModeButton(props) {
    const mode = props.mode;
    // const { toggleDisplayMode, displayMode } = useContext(CaseStudiesContext);
    // console.log("displayMode in ChangeDisplayModeButton =", displayMode);

    return (
        <div>
            <p>
                <span>Cards </span> ⇄ <span> List</span>
            </p>
            {/* <button onClick={() => toggleDisplayMode()}>🔃 Toggle case-studies Display Mode</button> */}
            <button onClick={() => props.toggle(mode === "cards" ? "list" : "cards")}>🔃 Toggle case-studies Display Mode</button>
        </div>
    );
}

export default ChangeDisplayModeButton;
