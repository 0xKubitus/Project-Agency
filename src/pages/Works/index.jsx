import Showdown from "showdown";
import caseStudies from "data/caseStudies";

const converter = new Showdown.Converter();

function createMarkup(caseStudy) {
    return { __html: converter.makeHtml(caseStudy.subtitle) };
}

const Works = () => {
    return (
        <div className="page-content">
            <h1 className="preview-title">Works</h1>
            <div className="markdown-preview">
                <h3>
                    Au fil des années, nous avons pu accompagner les meilleurs.
                </h3>
                <p>
                    Découvrez pas à pas comment nous avons été présents pour
                    lancer vos marques préférées.
                </p>
            </div>

            <div className="">
                <h2>AJOUTER ETUDES DE CAS CI-DESSOUS :</h2>
                <div className="works-cards">
                    {caseStudies.map(createMarkup())}{" "}
                    {/* IL Y A UN SOUCI SUR MA FONCTION MAP ET SA CALLBACK */}
                </div>
            </div>
        </div>
    );
};

export default Works;
