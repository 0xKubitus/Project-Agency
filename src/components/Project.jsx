import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import caseStudies from "data/caseStudies";

const Project = () => {
    const { projectName } = useParams();
    const [currentProject, setCurrentProject] = useState(undefined);

    useEffect(() => {
        const projectToDisplay = caseStudies.find(
            (project) => project.name === projectName
        );
        setCurrentProject(projectToDisplay);
    }, [projectName]);

    return (
        <div>
            {/* <h1>{currentProject.name}</h1>
            <h2>{currentProject.subtitle}</h2>
            <p>{currentProject.text}</p> */}
        </div>
    );
};

export default Project;
