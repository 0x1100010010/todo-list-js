import { codefactory } from './codefactory';
import { helper } from './helpers'
import { db } from './db';

export const status = () => {
  let _project;

  const projectStatus = (i) => {
    let projects = db().load();
    if (document.getElementById('status-flex-container-size') != null) {
      document.getElementById('status-flex-container-size').remove();
    }
    codefactory('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'status-flex-container-size' }, '', 'body-flex-container');
    codefactory('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'status-flex-container' }, '', 'status-flex-container-size');
  
    _project = projects[i];
    codefactory('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Status', 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Name: '.concat(_project.name), 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Description: '.concat(_project.description), 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Priority: '.concat(_project.priority), 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Duedate: '.concat(_project.duedate), 'status-flex-container');
    helper().renderTodos(i);
    window.projectIndex = i
    console.log(_project)
  }

  const todoStatus = (_todo) => {
    if (document.getElementById('status-flex-container-size') != null) {
      document.getElementById('status-flex-container-size').remove();
    }
    codefactory('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'status-flex-container-size' }, '', 'body-flex-container');
    codefactory('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'status-flex-container' }, '', 'status-flex-container-size');
    codefactory('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Status', 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Name: '.concat(_todo.name), 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Description: '.concat(_todo.description), 'status-flex-container');
  }

  

  return {
    projectStatus, todoStatus
  }
}
