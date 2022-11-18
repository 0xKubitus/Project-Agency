import { useContext } from "react";
import { CaseStudiesContext } from "context/CaseStudiesContext";

function ChangeDisplayModeButton() {
    const { toggleDisplayMode, displayMode } = useContext(CaseStudiesContext);

    return (
        <div>
            <p>
                <span>Cards </span> ⇄ <span> List</span>
            </p>
            <button onClick={() => toggleDisplayMode()}>🔃 Toggle case-studies Display Mode</button>
        </div>
    );
}

export default ChangeDisplayModeButton;
