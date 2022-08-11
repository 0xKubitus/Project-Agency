import caseStudies from "data/caseStudies";

// import Showdown from "showdown";
// const converter = new Showdown.Converter();

// function createMarkup(object) {
//     return { __html: converter.makeHtml(object.subtitle) };
// }

const CaseStudiesLinks = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.text}</p>
        </div>
    );
};

export default CaseStudiesLinks;
