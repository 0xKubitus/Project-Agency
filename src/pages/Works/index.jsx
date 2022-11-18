import { Link, Outlet } from "react-router-dom";
// import { useContext, useState, useEffect } from "react";
import { DisplayModeProvider, CaseStudiesContext } from "context/CaseStudiesContext";
import ChangeDisplayModeButton from "components/ChangeDisplayModeButton";

const Works = ({ caseStudies, mode }) => {
    // const displayMode = useContext(CaseStudiesContext);
    // const [mode, setMode] = useState("");

    // console.log("displayMode in Works =", mode);

    // useEffect(() => {
    //     setMode(displayMode);
    // }, [displayMode]);

    return (
        <DisplayModeProvider>
            <div>
                <h2>Please navigate amongst our case-studies:</h2>
                <ChangeDisplayModeButton />

                {/* SI 'mode' === 'list', AFFICHER CECI : */}
                {mode === "list" ? (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "25vh",
                        }}
                    >
                        <ul>
                            {caseStudies.map((project) => (
                                <li
                                    key={project.name}
                                    style={{
                                        margin: "10px",
                                    }}
                                >
                                    <Link to={project.name}>{project.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div>mode = {mode}</div>
                )}

                <Outlet />
            </div>
        </DisplayModeProvider>
    );
};

export default Works;
/*
============================================================================
import { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";

import CaseStudyLink from "components/CaseStudyLink";


const Works = () => {
    const { workName } = useParams();
    const [currentProject, setCurrentProject] = useState("Platon");

    useEffect(() => {
        const projectToDisplay = caseStudies.find(
            (project) => project.name === workName
        );
        setCurrentProject(projectToDisplay);
    }, [workName]);

    const casesElements = caseStudies.map((casestudy) => {
        return (
            <CaseStudyLink
                name={casestudy.name}
                key={casestudy.name}
                subtitle={casestudy.subtitle}
                text={casestudy.text}
            />
        );
    });

    return (
        <div className="page-content">
            <h1 className="preview-title">Works</h1>
            <div className="markdown-preview">
                <h3>
                    Au fil des années, nous avons pu accompagner les meilleurs.
                </h3>
                <p>
                    Découvrez pas à pas comment nous avons été présents pour
                    lancer vos marques préférées.
                </p>
            </div>

            <div className="case-studies-links">{casesElements}</div>

            <Outlet currentProject={currentProject} />
        </div>
    );
};

export default Works;

*/
