import { update } from "../../../api/category"
import HeaderAdmin from "../../../components/headerAdmin"
import { get } from "../../../api/category"
import axios from "axios";

const editCategory = {
    async render(id) {
        const { data } = await get(id)
        return /*html*/`
        <div>${HeaderAdmin.render()}</div>
        <div class="w-[1200px] mx-auto ">
        <form action="" id="edit_category" class="border w-[1400px] mx-auto p-[30px]">
           
          
            <label for="" class="text-[17px] font-bold">Tiêu đề bài viết</label> <br>
            <input type="text" placeholder="Tiêu đề bài viết..." value="${data.title}" id="title_category"
              class="border border-black rounded-[5px] p-[5px] w-full"> <br>
              <button class="border p-[20px] rounded-[30px] mt-[20px] w-[200px] text-[18px] font-bold text-white bg-blue-400 hover:bg-blue-600">Sửa danh mục</button> 
        </form>
        </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#edit_category");

        formEdit.addEventListener("submit", async (e) => {
          e.preventDefault();
          update({
            id,
            title: document.querySelector("#title_category").value,

          })
          .then((result) => console.log(result.data))
          .catch((error) => console.log(error));
        });
    }
};
export default editCategory;