import { getAll } from "../api/category";

const Category = {
    async render (){
        const {data} = await getAll();
        return /*html*/`
        <div class="w-[1300px] mx-auto border  bg-white grid grid-cols-6 my-[20px]">
            ${data.map((category) => `
                <div class="border border-black text-center hover:scale-[1.05] hover:shadow m-[10px] p-[10px]"><h1>${category.title}</h1></div>
            `).join("")} 
        </div>
        `;
    },
};
export default Category;