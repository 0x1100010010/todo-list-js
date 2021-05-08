import { codefactory } from './codefactory';

export const form = () => {
  const project = () => {
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-name', name: 'name', type: 'text', placeholder: 'Name', required: '',
    }, '', 'project-form');
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-description', name: 'description', type: 'text', placeholder: 'Description', required: '',
    }, '', 'project-form');
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-priority', name: 'priority', type: 'number', placeholder: 'Priority', required: '',
    }, '', 'project-form');
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-duedate', name: 'duedate', type: 'text', placeholder: 'Duedate', required: '',
    }, '', 'project-form');
    codefactory('button', {
      class: 'flex items-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'project-submit', name: 'project-submit', type: 'submit', value: 'Send',
    }, '', 'project-form');
    codefactory('span', { class: '' }, 'Submit', 'project-submit');
  };

  const todo = () => {
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'todo-name', name: 'name', type: 'text', placeholder: 'Name', required: '',
    }, '', 'todo-form');
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'todo-description', name: 'description', type: 'text', placeholder: 'Description', required: '',
    }, '', 'todo-form');
    codefactory('button', {
      class: 'flex items-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'todo-submit', name: 'todo-submit', type: 'submit', value: 'Send',
    }, '', 'todo-form');
    codefactory('span', { class: '' }, 'Submit', 'todo-submit');
  };

  return {
    project, todo,
  };
};