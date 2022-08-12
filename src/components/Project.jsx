import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import caseStudies from "data/caseStudies";

const Project = ({ currentProject }) => {
    return (
        <div>
            {currentProject && <p>rendu projet à afficher ici :</p>}

            {currentProject && <h1>{currentProject.name}</h1>}
            {currentProject && <h2>{currentProject.subtitle}</h2>}
            {currentProject && <p>{currentProject.text}</p>}
        </div>
    );
};

export default Project;
