import caseStudies from "data/caseStudies";
import CaseStudyLink from "components/CaseStudyLink";
import Project from "components/Project";

const Works = () => {
    const casesElements = caseStudies.map((casestudy) => {
        return (
            <CaseStudyLink
                name={casestudy.name}
                key={casestudy.name}
                subtitle={casestudy.subtitle}
                text={casestudy.text}
            />
        );
    });

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

            <div className="case-studies-links">{casesElements}</div>

            <Project />
        </div>
    );
};

export default Works;
