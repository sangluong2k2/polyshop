import { get } from "../api/products";
import Footer from "../components/footer";
import Header from "../components/header";
import { addToCart } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const DetailProductPage = {
    async render(id) {
        const { data } = await get(id)
        return `
            <div>
                ${Header.render()}
            </div>
            <div class="w-[1200px] mx-auto grid grid-cols-2 my-[50px] bg-white rounded-[10px]"> 
                <div class="m-[20px]">
                    <img src="${data.img}" alt="">
                </div>
                <div class="m-[20px]">
                    <p class="text-[36px] pb-[20px] text-[#027bc6]">${data.title}</p>
                    <p class="text-[36px] pb-[20px] text-red-600">${data.price} VND</p>
                    
                    <input type="number" id="inputValue" class="border border-black w-[50px] mb-[10px]" value="1" /> <br>
                    <button id="btnAddTocart" class="border p-[10px] rounded-[10px] bg-[#57d7ff] hover:bg-[#027bc6] text-[17px] font-bold text-white ">Thêm vào giỏ hàng</button>
                </div>
            </div>
            <div id="footer">
                ${Footer.render()}
            </div>
        `;
    },

    afterRender(id){
        const btnAddTocart = document.querySelector('#btnAddTocart');
        const inputValue = document.querySelector('#inputValue');


        btnAddTocart.addEventListener('click', async () => {
            const { data } = await get(id);
            addToCart({...data, quantity: inputValue.value ? +inputValue.value : 1}, function(){
                toastr.success("Thêm vào giỏ hàng thành công!");
            })
            
        })
    }
};

export default DetailProductPage;