import { signin } from "../api/user";
import toastr from "toastr";
import "toastr/build/toastr.min.css"

const Signin = {
    async render() {
        return /*html*/ `
        <div class="py-20 h-screen bg-gradient-to-r from-cyan-500 to-blue-500 px-2">
        <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-md">
            <div class="md:flex">
                <div class="w-full p-3 px-6 py-10">
                   <form action="" id="formSignin">
                    <div class="text-center"> <span class="text-[24px] text-gray-700 ">Đăng nhập</span> </div>
                    <div class="mt-3 relative"> <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Email</span> <input id="email" type="text" class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"> </div>
                    <div class="mt-4 relative"> <span class="absolute p-1 bottom-8 ml-2 bg-white text-gray-400 ">Mật khẩu</span> <input id="password" type="password" class="h-12 px-2 w-full border-2 rounded focus:outline-none focus:border-red-600"> </div>
                    <div class="mt-4"> <button class="h-12 w-full bg-red-600 text-white rounded hover:bg-red-700">Đăng nhập </button> </div>
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
        const formSignin = document.querySelector('#formSignin');
        formSignin.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const {data} = await signin({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value
                });
                
                if(data){
                    localStorage.setItem('user', JSON.stringify(data.user));
                    toastr.success("Đăng nhập thành công");
                    setTimeout(() => {
                        if(data.user.id === 1) {
                            document.location.href="#/admin"
                        }else {
                            document.location.href="#/"
                        }
                    }, 2000);
                }
            } catch(error) {
                toastr.error(error.response.data);
                document.location.href="#/signin"
            }
        });
    },
};

export default Signin;