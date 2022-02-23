import { getAll } from "../api/products";

const Product = {
    async render(){
        const {data} = await getAll();
        return /*html*/ `
             <!-- product hot -->
        <div class="grid gap-4 grid-cols-3 grid-rows-2 border w-[1400px] mx-auto rounded-[10px] bg-white my-[20px]">
          ${data.map((product) => `
          <a class="hover:scale-[1.05] border m-[20px] rounded-[10px] hover:shadow" href="/products/${product.id}"><div class="grid  m-[20px] rounded-[5px] ">
          <img class="p-[2px]  w-[400px] h-[300px] object-cover mx-auto" src="${product.img}" alt="">
          <p class="py-[20px] text-center text-[18px]">${product.title}</p>
          <p class="py-[20px] text-center text-[18px] text-red-600">${product.price} </p>
          </div></a>
          `).join("")}
          
      </div>
      
        `;
    },
};
export default Product;