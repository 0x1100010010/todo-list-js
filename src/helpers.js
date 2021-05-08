import { db } from './db'
import { codefactory } from './codefactory';
import { status } from './status';

export const helper = () => {
  
  const renderTodos = (i) => {
    let projects = db().load();
    let _todos = projects[i].todos
    if (document.getElementById('todo-names') != null) {
      document.getElementById('todo-names').remove();
    }
    codefactory('div', { class: 'border border-gray-200 my-3 p-5 rounded-lg flex flex-col divide-gray-200', id: 'todo-names' }, '', 'todo-flex-container')
    if (_todos){
    Object.keys(_todos).forEach( (i) => codefactory('th', { scope: "col", class: "p-2 text-xs font-medium text-gray-500 self-center w-full hover:bg-blue-50 cursor-pointer" }, _todos[i].name, 'todo-names').addEventListener('click', () => status().todoStatus(_todos[i])))
  }
  }
  
  const renderProjects = () => {
    let projects = db().load()
    if (document.getElementById('project-names') != null) {
      document.getElementById('project-names').remove();
    }
    codefactory('div', { class: 'border border-gray-200 my-3 p-5 rounded-lg flex flex-col divide-gray-200', id: 'project-names' }, '', 'project-flex-container')
    Object.keys(projects).forEach( 
      (i) => {
        codefactory('th', { scope: "col", class: "p-2 text-xs font-medium text-gray-500 self-center w-full hover:bg-blue-50 cursor-pointer" }, projects[i].name, 'project-names').addEventListener('click', () => (status().projectStatus(i)));
      }
    )};
  
  return { renderProjects, renderTodos };
};