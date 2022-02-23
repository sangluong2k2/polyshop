import Footer from "../components/footer"
import Header from "../components/header"
import Posts from "../components/news";

const NewsPage = {
    async render() {
        return /*html*/ `
            <div>
                ${Header.render()}
            </div>
            <div>
                ${ await Posts.render()}
            </div>
            <div>
                ${Footer.render()}
            </div>
        `;
    },
};

export default NewsPage;