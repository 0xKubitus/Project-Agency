import { Link, Outlet } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DisplayModeProvider, CaseStudiesContext } from "context/CaseStudiesContext";
import DisplayList from "components/DisplayList";
import DisplayCards from "components/DisplayCards";
import ChangeDisplayModeButton from "components/ChangeDisplayModeButton";

const Works = ({ caseStudies }) => {
    const displayMode = useContext(CaseStudiesContext);
    console.log("displayMode in Works =", displayMode);

    const [mode, setMode] = useState(displayMode);
    console.log("'mode' state in Works/index.jsx =", mode);

    return (
        <DisplayModeProvider>
            <div>
                <ChangeDisplayModeButton mode={mode} toggle={setMode} />

                {mode === "list" && <DisplayList caseStudies={caseStudies} />}
                {mode === "cards" && <DisplayCards caseStudies={caseStudies} />}
            </div>
        </DisplayModeProvider>
    );
};

export default Works;
