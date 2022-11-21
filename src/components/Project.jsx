import { useParams, Link } from "react-router-dom";
import { createMarkup } from "helpers";

import caseStudies from "data/caseStudies";

const Project = () => {
    const { workName } = useParams();

    const work = caseStudies.find((project) => project.name === workName);

    return (
        <>
            <div style={{ border: "1px solid red" }}>
                <h1>{work.name}</h1>
                <div dangerouslySetInnerHTML={createMarkup(work.subtitle)}></div>
                <p>{work.text}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
                <Link to="/works">Go Back⏎</Link>
            </div>
        </>
    );
};

export default Project;
