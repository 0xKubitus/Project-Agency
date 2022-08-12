import { Link, Outlet } from "react-router-dom";

const DisplayCaseStudies = ({ name, key, subtitle, text }) => {
    return (
        <div>
            <Link to={`/work/${name}`}>{name} (lien à cliquer)</Link>

            {/* <h1>{props.name}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.text}</p> */}
        </div>
    );
};

export default DisplayCaseStudies;
// import Showdown from "showdown";
// const converter = new Showdown.Converter();

// function createMarkup(object) {
//     return { __html: converter.makeHtml(object.subtitle) };
// }
