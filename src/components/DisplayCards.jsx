import { createMarkup } from "helpers";

const DisplayCards = ({ caseStudies }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <section
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {caseStudies.map((project) => (
                    <div
                        key={project.name}
                        style={{
                            margin: "20px",
                        }}
                    >
                        <div style={{ border: "1px solid red", height: "300px", minWidth: "250px", maxWidth: "400px", padding: "15px" }}>
                            <h1
                                style={{
                                    color: "orange",
                                    lineHeight: "10px",
                                }}
                            >
                                {project.name}
                            </h1>
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
