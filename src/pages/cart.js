import { reRender } from "../utils/reRender";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import Header from "../components/header";

const CartPage = {
    render() {
        let cart = [];
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
        }
        return /*html*/`
        <div>
            ${Header.render()}
        </div>
        <div class="container p-8 mx-auto mt-12 bg-white">
      <div class="w-full overflow-x-auto">
        <table class="w-full shadow-inner">
          <thead>
            <tr class="bg-gray-100">
              <th class="px-6 py-3 font-bold whitespace-nowrap">Sản phẩm</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Số lượng</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Giá</th>
              <th class="px-6 py-3 font-bold whitespace-nowrap">Xóa</th>
            </tr>
          </thead>
          <tbody>
          ${cart.map(item =>`
          <tr>
          <td class="p-4 px-6 text-center whitespace-nowrap">${item.title}</td>
          <td class="p-4 px-6 text-center whitespace-nowrap">
            <div>
              <button data-id="${item.id}" class="btn btn-decrease px-2 py-0 shadow">-</button>
              <input
                type="text"
                name="qty"
                value="${item.quantity}"
                class="w-12 text-center bg-gray-100 outline-none"
              />
              <button data-id="${item.id}" class=" btn btn-increase px-2 py-0 shadow">+</button>
            </div>
          </td>
          <td class="p-4 px-6 text-center whitespace-nowrap">${item.price}</td>
          <td class="p-4 px-6 text-center whitespace-nowrap">
            <button data-id="${item.id}" class=" btn btn-remove px-2 py-0 text-red-100 bg-red-600 rounded">
              x
            </button>
          </td>
        </tr>
        
          `)}
          <tr>
          <td class="p-4 px-6 text-center whitespace-nowrap"></td>
          <td class="p-4 px-6 text-center whitespace-nowrap">
            <div class="font-bold">Tổng số lượng</div>
          </td>
          <td class="p-4 px-6 font-extrabold text-center whitespace-nowrap">
            Tổng tiền
          </td>
          
        </tr>
          </tbody>
        </table>
        <div class="flex justify-end mt-4 space-x-2">
          <button
            class="
              px-6
              py-3
              text-sm text-gray-800
              bg-gray-200
              hover:bg-gray-400
            "
          >
            Hủy
          </button>
          <button
            class="
              px-6
              py-3
              text-sm text-white
              bg-indigo-500
              hover:bg-indigo-600
            "
          >
            Thanh toán
          </button>
        </div>
      </div>
    </div>
        `
    },

    afterRender(){
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                if(btn.classList.contains('btn-increase')){
                    increaseQuantity(id, () => reRender(CartPage, "#app"))
                } else if(btn.classList.contains('btn-decrease')){
                    decreaseQuantity(id, () => reRender(CartPage, "#app"))
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Bạn đã xóa sản phẩm thành công");
                    })
                }
            })
        })
    }
}
export default CartPage;