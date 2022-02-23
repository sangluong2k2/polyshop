import HeaderAdmin from "../../../components/headerAdmin"
import axios from "axios";
import { add } from "../../../api/products";
const addNewProduct = {
    render() {
        return /*html*/ `
            <div>${HeaderAdmin.render()}</div>
            <div class="w-[1200px] mx-auto ">
            <form action="" id="add_product" class="border w-[1400px] mx-auto p-[30px]">
            
                <label for="" class="text-[17px] font-bold">Tiêu đề sản phẩm</label> <br>
                <input type="text" placeholder="Tiêu đề sản phẩm..." id="title_product"
                  class="border border-black rounded-[5px] p-[5px] w-full"> <br>
              
                <label for="" class="text-[17px] font-bold  mt-[20px]">Giá</label> <br>
                <input type="number" placeholder="Giá sản phẩm" id="price_product"
                  class="border border-black rounded-[5px] p-[5px] w-full">
              
             
                <label for="" class="text-[17px] font-bold  mt-[20px]">Ảnh</label> <br>
                <div class="grid grid-cols-2">
                <div>
                  <input type="file" id="image_product" class=" file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 file:cursor-pointer">
                </div>
                <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png" id="previewImage" class="w-[100px] h-[100px]" >
                </div>
                </div>
              
                <button class="border p-[20px] rounded-[30px] mt-[20px] w-[200px] text-[18px] font-bold text-white bg-blue-400 hover:bg-blue-600 ">Thêm sản phẩm</button> 
              </form>
            </div>
        `;
    },
    afterRender() {
      const formAdd = document.querySelector("#add_product");
      const imgProduct = document.querySelector("#image_product");
      const imgPreview = document.querySelector('#previewImage');
      
      imgProduct.addEventListener("change", (e) => {
        imgPreview.src = URL.createObjectURL(imgProduct.files[0])
      });
      formAdd.addEventListener("submit", async (e) => {
        e.preventDefault();

        const file = imgProduct.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "hzeskmhn");

        const { data } = await axios({
          url: "https://api.cloudinary.com/v1_1/dkhutgvlb/image/upload",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-formendcoded",
          },
          data: formData,
        })
        add({
          title: document.querySelector("#title_product").value,
          img: data.url,
          price: document.querySelector("#price_product").value,
        })
        .then((result) => console.log(result.data))
        .catch((error) => console.log(error));
      });
     
    },
};

export default addNewProduct;