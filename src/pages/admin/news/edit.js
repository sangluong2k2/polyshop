import { update } from "../../../api/news"
import HeaderAdmin from "../../../components/headerAdmin"
import { get } from "../../../api/news"
import axios from "axios";

const editpost = {
    async render(id) {
        const { data } = await get(id)
        return /*html*/`
        <div>${HeaderAdmin.render()}</div>
        <div class="w-[1200px] mx-auto ">
        <form action="" id="edit_post" class="border w-[1400px] mx-auto p-[30px]">
           
          
            <label for="" class="text-[17px] font-bold">Tiêu đề bài viết</label> <br>
            <input type="text" placeholder="Tiêu đề bài viết..." value="${data.title}" id="title_post"
              class="border border-black rounded-[5px] p-[5px] w-full"> <br>

            <label for="" class="text-[17px] font-bold  mt-[20px]">Nội dung</label> <br>
            <textarea id="desc_post" cols="30" rows="10"></textarea> <br> 
         
              <label for="" class="text-[17px] font-bold  mt-[20px]">Ảnh</label> <br>
                  <input type="file" id="image_post" class=" file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 file:cursor-pointer">

                  <img src="${data.img}" id="previewImage" class="w-[150px] h-[100px]" >
              
              <button class="border p-[20px] rounded-[30px] mt-[20px] w-[200px] text-[18px] font-bold text-white bg-blue-400 hover:bg-blue-600">Sửa bài viết</button> 
        </form>
        </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#edit_post");
        const imgpost = document.querySelector("#image_post");
        const imgPreview = document.querySelector('#previewImage');
        let imgUploadedLink = "";
        
        imgpost.addEventListener("change",  (e) => {
          imgPreview.src = URL.createObjectURL(imgpost.files[0])
        });

        formEdit.addEventListener("submit", async (e) => {
          e.preventDefault();
  
          const file = imgpost.files[0];
          if(file){
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
            });
            imgUploadedLink = data.url
          }
          
          update({
            id,
            title: document.querySelector("#title_post").value,
            img: imgUploadedLink ? imgUploadedLink : imgPreview.src,
            desc: document.querySelector("#desc_post").value,

          })
          .then((result) => console.log(result.data))
          .catch((error) => console.log(error));
        });
    }
};
export default editpost;