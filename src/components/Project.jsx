import { useParams, Link } from "react-router-dom";
import Showdown from "showdown";

import caseStudies from "data/caseStudies";

const converter = new Showdown.Converter();

const Project = () => {
    const { workName } = useParams();
    // console.log("workName:", workName);

    const work = caseStudies.find((project) => project.name === workName);
    // console.log("work:", work);

    function createMarkup(object) {
        return { __html: converter.makeHtml(object) };
    }

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

// import Showdown from "showdown";
// const converter = new Showdown.Converter();

// function createMarkup(object) {
//     return { __html: converter.makeHtml(object.subtitle) };
// }
