import { Link, Outlet } from "react-router-dom";

const DisplayList = ({ caseStudies }) => {
    return (
        <>
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
            <Outlet />
        </>
    );
};

export default DisplayList;
