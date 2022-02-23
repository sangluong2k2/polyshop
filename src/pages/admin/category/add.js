import HeaderAdmin from "../../../components/headerAdmin"
import axios from "axios";
import { add } from "../../../api/category";
const addNewCategory = {
    render() {
        return /*html*/ `
            <div>${HeaderAdmin.render()}</div>
            <div class="w-[1200px] mx-auto ">
            <form action="" id="add_category" class="border w-[1400px] mx-auto p-[30px]">
              
                <label for="" class="text-[17px] font-bold">Tiêu đề bài viết</label> <br>
                <input type="text" placeholder="Danh mục" id="title_category"
                  class="border border-black rounded-[5px] p-[5px] w-full"> <br>           
                <button class="border p-[20px] rounded-[30px] mt-[20px] w-[200px] text-[18px] font-bold text-white bg-blue-400 hover:bg-blue-600 ">Thêm danh mục</button> 
              </form>
            </div>
        `;
    },
    afterRender() {
      const formAdd = document.querySelector("#add_category");
      
      formAdd.addEventListener("submit", async (e) => {
        e.preventDefault();
        add({
          title: document.querySelector("#title_category").value,
        })
        .then((result) => console.log(result.data))
        .catch((error) => console.log(error));
      });
     
    },
};

export default addNewCategory;