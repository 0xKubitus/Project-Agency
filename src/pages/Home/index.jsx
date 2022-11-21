import { createMarkup } from "helpers";

const Home = ({ homepageText }) => {
    return (
        <div className="page-content">
            <h1 className="preview-title">Homepage</h1>
            <div className="markdown-preview">
                <div dangerouslySetInnerHTML={createMarkup(homepageText.header)}></div>
                <p>{homepageText.body}</p>
            </div>
        </div>
    );
};

export default Home;
