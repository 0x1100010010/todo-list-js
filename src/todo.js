import { codefactory } from './codefactory';
import { form } from './form'
import { db } from './db'
import { helper } from './helpers';

export const todo = () => {
  codefactory('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'todo-flex-container-size' }, '', 'body-flex-container');
  codefactory('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'todo-flex-container' }, '', 'todo-flex-container-size');
  
  codefactory('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'todos', 'todo-flex-container');
  codefactory('button', { class: 'flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'todo-add-button' }, '', 'todo-flex-container').addEventListener('click', () => { todoForm.classList.toggle('hidden') });;
  codefactory('i', { class: "fas fa-tasks mr-3" }, '', 'todo-add-button');
  codefactory('span', { class: "" }, 'Add Todo', 'todo-add-button');
  codefactory('i', { class: "fas fa-plus-square ml-auto" }, '', 'todo-add-button');
  const todoForm = codefactory('form', { class: 'border border-gray-200 my-3 p-6 rounded-lg flex flex-col hidden', id: 'todo-form' }, '', 'todo-flex-container');
  form().todo();
  todoForm.addEventListener('submit', db().parseTodo)
}

// export default project;
