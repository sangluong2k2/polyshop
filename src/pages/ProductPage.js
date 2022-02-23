import Footer from "../components/footer"
import Header from "../components/header"
import Product from "../components/product"

const ProductPage = {
    async render() {
        return /*html*/ `
            <div>
                ${Header.render()}
            </div>
            <div>
                ${ await Product.render()}
            </div>
            <div>
                ${Footer.render()}
            </div>
        `;
    },
};

export default ProductPage;