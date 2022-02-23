import { getAll } from "../api/news";

const Posts = {
    async render(){
        const {data} = await getAll();
        return /*html*/ `
             <!-- Posts hot -->
        <div class="grid gap-4 grid-cols-2 grid-rows-2 border w-[1400px] mx-auto rounded-[10px] bg-white my-[20px]">
        ${data.map((Posts) => `
        <a class="hover:scale-[1.05] border m-[20px] rounded-[10px] hover:shadow" href="/news/${Posts.id}"><div class="flex bg-white m-[20px] rounded-[5px] ">
        <div>
        <img class="p-[2px]  w-[250px] h-[150px] object-cover mx-auto" src="${Posts.img}" alt="">
        </div>
        <div>
       <p class="py-[5px] text-center text-[18px] font-bold">${Posts.title}</p>
       <p class="py-[5px] text-center text-[18px] text-gray-400">${Posts.desc}</p>
       </div>
        </div></a>
        `).join("")}
      </div>
        `;
    },
};
export default Posts;