import { useParams, Link } from "react-router-dom";

import caseStudies from "data/caseStudies";

const Project = () => {
    const { workName } = useParams();

    console.log(workName);

    const work = caseStudies.find((project) => project.name === workName);

    console.log(work);

    return (
        <>
            <div style={{ border: "1px solid red" }}>
                <h1>{work.name}</h1>
                <h2>{work.subtitle}</h2>
                <p>{work.text}</p>
            </div>
            <div style={{ marginTop: "20px" }}>
                <Link to="/works">Go Back</Link>
            </div>
        </>
    );
};

export default Project;

// import Showdown from "showdown";
// const converter = new Showdown.Converter();

// function createMarkup(object) {
//     return { __html: converter.makeHtml(object.subtitle) };
// }
