import Banner from "../components/banner"
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
            
            <div class="w-[1300px] mx-auto border  bg-white grid grid-cols-6 my-[20px]">
                <div class="border border-black text-center hover:scale-[1.05] hover:shadow m-[10px] p-[10px]"><h1>Máy tính</h1></div>
                <div class="border border-black text-center hover:scale-[1.05] hover:shadow m-[10px] p-[10px]"><h1>Máy tính</h1></div>
                <div class="border border-black text-center hover:scale-[1.05] hover:shadow m-[10px] p-[10px]"><h1>Máy tính</h1></div>
                <div class="border border-black text-center hover:scale-[1.05] hover:shadow m-[10px] p-[10px]"><h1>Máy tính</h1></div>
                <div class="border border-black text-center hover:scale-[1.05] hover:shadow m-[10px] p-[10px]"><h1>Máy tính</h1></div>
                <div class="border border-black text-center hover:scale-[1.05] hover:shadow m-[10px] p-[10px]"><h1>Máy tính</h1></div>
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
