import HeaderAdmin from "../../components/headerAdmin"

const adminPage = {
    render(){
        return /*html*/ `
        <div>${HeaderAdmin.render()} </div>
        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        `;
    },
};

export default adminPage;