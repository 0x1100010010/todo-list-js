import { codefactory } from './codefactory';
import { db } from './db';

export const status = () => {
  codefactory('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'status-flex-container-size' }, '', 'body-flex-container');
  codefactory('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'status-flex-container' }, '', 'status-flex-container-size');
  codefactory('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Status', 'status-flex-container');
  
  const projectStatus = (i) => {
    let projects = db().load();
    if (document.getElementById('status-flex-container') != null) {
      document.getElementById('status-flex-container').remove();
    }
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Name: '.concat(projects[i].name), 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Description: '.concat(projects[i].description), 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Priority: '.concat(projects[i].priority), 'status-flex-container');
    codefactory('span', { class: 'text-lg text-gray-500 font-medium title-font mb-2' }, 'Duedate: '.concat(projects[i].duedate), 'status-flex-container');
  }

  return {
    projectStatus
  }
}
