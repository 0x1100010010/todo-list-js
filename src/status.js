import { codefactory } from './codefactory';
import { helper } from './helpers';
import { db } from './db';

export const status = () => {
  let project, todo;
  const projects = db().load();

  const projectStatus = (i) => {
    if (document.getElementById('status-flex-container-size') != null) {
      document.getElementById('status-flex-container-size').remove();
    }
    codefactory('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'status-flex-container-size' }, '', 'body-flex-container');
    codefactory('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'status-flex-container' }, '', 'status-flex-container-size');

    project = projects[i];
    codefactory('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Status', 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Name: '.concat(project.name), 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Description: '.concat(project.description), 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Priority: '.concat(project.priority), 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Duedate: '.concat(project.duedate), 'status-flex-container');
    helper().renderTodos(i);
    window.projectIndex = i;
    codefactory('div', { class: 'inline-flex w-full mt-2', id: 'project-controls' }, '', 'status-flex-container');
    codefactory('button', { class: 'bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 w-full rounded-l' }, 'Edit', 'project-controls');
    codefactory('button', { class: 'bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 w-full rounded-r' }, 'Drop', 'project-controls').addEventListener('click', db().dropProject);
  };

  const todoStatus = (i) => {
    if (document.getElementById('status-flex-container-size') != null) {
      document.getElementById('status-flex-container-size').remove();
    }
    todo = projects[window.projectIndex].todos[i]
    codefactory('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'status-flex-container-size' }, '', 'body-flex-container');
    codefactory('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'status-flex-container' }, '', 'status-flex-container-size');
    codefactory('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Status', 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Name: '.concat(todo.name), 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Description: '.concat(todo.description), 'status-flex-container');
    window.todoIndex = i;
    codefactory('div', { class: 'inline-flex w-full mt-2', id: 'project-controls' }, '', 'status-flex-container');
    codefactory('button', { class: 'bg-green-400 hover:bg-green-500 text-gray-800 font-bold py-2 px-4 w-full rounded-l' }, 'Edit', 'project-controls');
    codefactory('button', { class: 'bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 w-full rounded-r' }, 'Drop', 'project-controls').addEventListener('click', db().dropTodo);
  };

  return {
    projectStatus, todoStatus,
  };
};
