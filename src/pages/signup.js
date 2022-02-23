import { signup } from "../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css"
const SignUp = {
    async render() {
        return /*html*/ `
        <div class="py-20 h-screen bg-gradient-to-r from-cyan-500 to-blue-500 px-2">
        <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
            <div class="md:flex">
                <div class="w-full p-3 px-6 py-10">
                   <form action="" id="formSignup">
                    <div class="text-center"> <span class="text-[24px] text-gray-700 ">Đăng ký</span> </div>
                    <div class="mt-3 relative"> <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Tên đăng nhập</span> <input id="username" type="text" class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"> </div>
                    <div class="mt-4 relative"> <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Email</span> <input id="email" type="text" class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"> </div>
                    <div class="mt-4 relative"> <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Mật khẩu</span> <input id="password" type="password" class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"> </div>
                    <div class="mt-4"> <button class="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700">Đăng ký </button> </div>
                   </form>
                    <div class="my-[10px]">
                      <a href="/" class="hover:text-blue-600"><button>Trở về <i class="fa fa-long-arrow-right"></i></button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
    },
    afterRender(){
        const formSignup = document.querySelector('#formSignup');
        formSignup.addEventListener("submit", (e) => {
            e.preventDefault();
            signup({
                username: document.querySelector("#username").value,
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
            toastr.success("Đăng ký thành công");
            setTimeout(() => {
                window.location.href="/#/signin";
            }, 2000);
        });
    },
};

export default SignUp;