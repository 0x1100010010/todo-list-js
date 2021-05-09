import { codefactory } from './codefactory';
import { db } from './db';

export const form = () => {
  let projects = db().load();
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

  const editProject = () => {
    document.getElementById('status-flex-container').innerHTML = '';
    codefactory('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Status', 'status-flex-container');
    codefactory('form', { class: 'border border-gray-200 my-3 p-6 rounded-lg flex flex-col', id: 'project-edit-form' }, '', 'status-flex-container').addEventListener('submit', db().editProject);
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-name', name: 'name', value: projects[window.projectIndex].name, type: 'text', placeholder: 'Name', required: '',
    }, '', 'project-edit-form');
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-description', name: 'description', value: projects[window.projectIndex].description, type: 'text', placeholder: 'Description', required: '',
    }, '', 'project-edit-form');
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-priority', name: 'priority', value: projects[window.projectIndex].priority, type: 'number', placeholder: 'Priority', required: '',
    }, '', 'project-edit-form');
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full py-2 px-3 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'project-duedate', name: 'duedate', value: projects[window.projectIndex].duedate, type: 'text', placeholder: 'Duedate', required: '',
    }, '', 'project-edit-form');
    codefactory('button', {
      class: 'flex items-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'project-edit-submit', name: 'project-edit-submit', type: 'submit', value: 'Send',
    }, '', 'project-edit-form');
    codefactory('span', { class: '' }, 'Submit', 'project-edit-submit');
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

  const editTodo = () => {
    document.getElementById('status-flex-container').innerHTML = '';
    codefactory('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Status', 'status-flex-container');
    codefactory('form', { class: 'border border-gray-200 my-3 p-6 rounded-lg flex flex-col', id: 'todo-edit-form' }, '', 'status-flex-container').addEventListener('submit', db().editTodo);
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'todo-name', name: 'name', type: 'text', placeholder: 'Name', value: projects[window.projectIndex].todos[window.todoIndex].name, required: '',
    }, '', 'todo-edit-form');
    codefactory('input', {
      class: 'shadow appearance-none border rounded w-full px-3 py-2 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline', id: 'todo-description', name: 'description', value: projects[window.projectIndex].todos[window.todoIndex].description, type: 'text', placeholder: 'Description', required: '',
    }, '', 'todo-edit-form');
    codefactory('button', {
      class: 'flex items-center justify-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'todo-edit-submit', name: 'todo-edit-submit', type: 'submit', value: 'Send',
    }, '', 'todo-edit-form');
    codefactory('span', { class: '' }, 'Submit', 'todo-edit-submit');
  };

  return {
    project, todo, editProject, editTodo
  };
};