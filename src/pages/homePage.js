import Banner from "../components/banner"
import Category from "../components/category";
import Footer from "../components/footer";
import Header from "../components/header";
import Posts from "../components/news";
import Product from "../components/product"

const HomePage = {
    async render() {
        return /*html*/ `
            <div id="header">
                ${Header.render()}
            </div>
            <div id="banner">
                ${Banner.render()}
            </div>
            <div class="w-[1400px] mx-auto border rounded-br-[20px] rounded-tl-[20px] bg-[#57d7ff]">
               <p class="text-center py-5 font-bold text-[17px] text-white ">SẢN PHẨM HOT</p>
            </div>
            <div>
                ${ await Category.render()}
            </div>
            
            <div id="products">
                ${ await Product.render()}
            </div>
            <div class="w-[1400px] mx-auto border rounded-br-[20px] rounded-tl-[20px] bg-[#57d7ff]">
            <p class="text-center py-5 font-bold text-[17px] text-white ">TIN TỨC</p>
         </div>
            <div id="news">
                ${ await Posts.render()}
            </div>
            <div id="footer">
                ${Footer.render()}
            </div>
        `;
    },
    aferRender(){
        Header.afterRender();
    }
};

export default HomePage;
