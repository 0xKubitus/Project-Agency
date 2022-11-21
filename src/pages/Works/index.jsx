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

    // useEffect(() => {
    //     setMode(displayMode);
    // }, [displayMode]);

    return (
        <DisplayModeProvider>
            <div>
                <h2>Please navigate amongst our case-studies:</h2>

                {mode === "list" && <DisplayList caseStudies={caseStudies} />}
                {mode === "cards" && <DisplayCards caseStudies={caseStudies} />}

                <ChangeDisplayModeButton mode={mode} toggle={setMode} />
            </div>
        </DisplayModeProvider>

        // <DisplayModeProvider>
        //     <div>
        //         <h2>Please navigate amongst our case-studies:</h2>
        //         <ChangeDisplayModeButton />

        //         {/* SI 'mode' === 'list', AFFICHER CECI : */}
        //         {mode === "list" ? (
        //             <div
        //                 style={{
        //                     display: "flex",
        //                     alignItems: "center",
        //                     justifyContent: "center",
        //                     height: "25vh",
        //                 }}
        //             >
        //                 <ul>
        //                     {caseStudies.map((project) => (
        //                         <li
        //                             key={project.name}
        //                             style={{
        //                                 margin: "10px",
        //                             }}
        //                         >
        //                             <Link to={project.name}>{project.name}</Link>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //         ) : (
        //             <div>mode = {mode}</div>
        //         )}

        //         <Outlet />
        //     </div>
        // </DisplayModeProvider>
    );
};

export default Works;
