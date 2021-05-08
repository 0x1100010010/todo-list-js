import { codefactory } from './codefactory';
import { form } from './form';
import { helper } from './helpers';
import { db } from './db';

export const project = () => {
  const projectForm = codefactory('form', { class: 'border border-gray-200 my-3 p-6 rounded-lg flex flex-col hidden', id: 'project-form', name: 'project-form' }, '', 'project-flex-container');

  codefactory('div', { class: 'xl:w-1/3 md:w-1/2 p-4', id: 'project-flex-container-size' }, '', 'body-flex-container');
  codefactory('div', { class: 'border border-gray-200 p-6 rounded-lg flex flex-col', id: 'project-flex-container' }, '', 'project-flex-container-size');
  codefactory('h1', { class: 'text-4xl text-gray-600 pb-4 mb-4 border-b border-gray-200 leading-none self-center' }, 'Projects', 'project-flex-container');
  codefactory('button', { class: 'flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded', id: 'porject-add-button' }, '', 'project-flex-container').addEventListener('click', () => { projectForm.classList.toggle('hidden'); });
  codefactory('i', { class: 'fas fa-project-diagram mr-3' }, '', 'porject-add-button');
  codefactory('span', { class: '' }, 'Add Project', 'porject-add-button');
  codefactory('i', { class: 'fas fa-plus-square ml-auto' }, '', 'porject-add-button');
  form().project();
  projectForm.addEventListener('submit', db().parseProject);

  helper().renderProjects();
};
