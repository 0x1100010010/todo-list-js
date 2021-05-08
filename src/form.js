import { codefactory } from './codefactory';

export const form = () => {
  const project = () => {
    codefactory('input', { class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: "project-name", name: "name", type: "text", placeholder: "Name" }, '', 'project-form');
    codefactory('input', { class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: "project-description", name: "description", type: "text", placeholder: "Description" }, '', 'project-form');
    codefactory('input', { class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: "project-priority", name: "priority", type: "number", placeholder: "Priority" }, '', 'project-form');
    codefactory('input', { class: 'shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: "project-duedate", name: "duedate", type: "text", placeholder: "Duedate" }, '', 'project-form');
    codefactory('button', { class: 'flex items-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'porject-submit', name: 'porject-submit', type: 'submit', value: 'Send' }, '', 'project-form')
    codefactory('span', { class: "" }, 'Submit', 'porject-submit');
  };

  const todo = () => {
    codefactory('input', { class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: "todo-name", name: "name", type: "text", placeholder: "Name" }, '', 'todo-form');
    codefactory('input', { class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: "todo-description", name: "description", type: "text", placeholder: "Description" }, '', 'todo-form');
    codefactory('button', { class: 'flex items-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'todo-submit', name: 'todo-submit', type: 'submit', value: 'Send' }, '', 'todo-form')
    codefactory('span', { class: "" }, 'Submit', 'todo-submit');
  };

  return {
    project, todo
  };
};

{/* <div class="w-full max-w-xs">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div> */}