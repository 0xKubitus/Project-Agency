import { createMarkup } from "helpers";

const About = ({ aboutPageText }) => {
    return (
        <div className="page-content">
            <h1 className="preview-title">About</h1>
            <div className="markdown-preview">
                <div dangerouslySetInnerHTML={createMarkup(aboutPageText.header)}></div>
                <p>
                    De l’étape d’avant projet web au lancement effectif du site, nous sommes là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous
                    proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs. Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON",
                    "TCar", "Solane" ou encore "Sedal" vers le sommet.
                </p>
            </div>
        </div>
    );
};

export default About;
