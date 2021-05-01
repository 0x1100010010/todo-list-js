import { codefactory } from './codefactory';

export const todo = () => {
  codefactory('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'todo-flex-container-size' }, '', 'body-flex-container');
  codefactory('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'todo-flex-container' }, '', 'todo-flex-container-size');
  
  codefactory('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Tasks', 'todo-flex-container');
  codefactory('button', { class: 'flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'todo-add-button' }, '', 'todo-flex-container');
  codefactory('i', { class: "fas fa-tasks mr-3" }, '', 'todo-add-button');
  codefactory('span', { class: "" }, 'Add Task', 'todo-add-button');
  codefactory('i', { class: "fas fa-plus-square ml-auto" }, '', 'todo-add-button');
  codefactory('h2', { class: 'text-lg text-gray-900 font-medium title-font mb-2' }, 'Shooting Stars', 'todo-flex-container');
  codefactory('h2', { class: 'leading-relaxed text-base' }, 'Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.', 'todo-flex-container');
}

// export default project;
