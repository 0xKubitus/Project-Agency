import { Link, Outlet } from "react-router-dom";
import { createMarkup } from "helpers";
// import Showdown from "showdown";

// const converter = new Showdown.Converter();

const DisplayCards = ({ caseStudies }) => {
    // function createMarkup(object) {
    //     return { __html: converter.makeHtml(object) };
    // }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // height: "25vh",
            }}
        >
            <section>
                {caseStudies.map((project) => (
                    <div
                        key={project.name}
                        style={{
                            margin: "10px",
                        }}
                    >
                        {/* <h2>{project.name}</h2>
                        <p>yo</p> */}
                        <div style={{ border: "1px solid red" }}>
                            <h1>{project.name}</h1>
                            <div dangerouslySetInnerHTML={createMarkup(project.subtitle)}></div>
                            <p>{project.text}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default DisplayCards;
