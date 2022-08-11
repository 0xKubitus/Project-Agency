import { Link } from "react-router-dom";

// import Showdown from "showdown";
// const converter = new Showdown.Converter();

// function createMarkup(object) {
//     return { __html: converter.makeHtml(object.subtitle) };
// }

const DisplayCaseStudies = (props) => {
    return (
        <div>
            <Link to={`/project/${props.name}`}>
                {props.name} (lien à cliquer)
            </Link>
            {/* <h2>{props.subtitle}</h2>
            <p>{props.text}</p> */}
        </div>
    );
};

export default DisplayCaseStudies;
