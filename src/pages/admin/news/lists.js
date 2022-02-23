import {getAll, remove} from "../../../api/news"
import HeaderAdmin from "../../../components/headerAdmin";
import { reRender } from "../../../utils/reRender";

const listsAdminPosts = {
  async render() {
    const { data } = await getAll()
    return /*html*/ `
        <div>
             ${HeaderAdmin.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold text-gray-900">
                        Posts
                    </h1>
                </div>
            </header>
        </div>
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
      <div class>
            <a href="#/admin/posts/add" class="border p-[10px] rounded-[5px] bg-[#57d7ff] text-[17px] text-white hover:bg-[#027bc6] font-bold"><button>Thêm mới </button></a>
        </div>
        <table class="min-w-full">
        
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Title
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Image
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                desc
              </th>
              
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
          ${data.map((post, index) => `
          <tr class="border-b">
            <td>${index + 1}</td>
            
            <td>${post.title}</td>
            <td class="p-[5px]"><img src="${post.img}" width="100"/></td>
            <td>${post.desc}</td>
            
            <td>
              <a href="/admin/posts/${post.id}/edit" class="hover:text-blue-600 mx-[20px]">Edit</a>
              <button data-id=${post.id} class="btn btn-remove hover:text-red-600">Remove</button>
            </td>
          </tr>
          `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        `;
  },
  afterRender() {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      const id = button.dataset.id;
      button.addEventListener('click', () => {
        const confirm = window.confirm("Bạn có muốn xóa bài viết này không ?");
        if (confirm) {
          remove(id).then(() => {
            console.log("Xóa thành công")
            reRender(listsAdminPosts, '#app')
          });
        }
      })
    });
  }
};

export default listsAdminPosts;