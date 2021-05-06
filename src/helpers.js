import { db } from './db'
import { codefactory } from './codefactory';

export const helper = () => {
  
  const renderProjects = () => {
    let projects = db().load()
    if (document.getElementById('project-names') != null) {
      document.getElementById('project-names').remove();
    }
    codefactory('projectNames', { class: 'border border-gray-200 my-3 p-5 rounded-lg flex flex-col divide-gray-200', id: 'project-names' }, '', 'project-flex-container')
    codefactory('th', { scope: "col", class: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, '', 'project-names')
    Object.keys(projects).forEach( (i) => codefactory('th', { class: "p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider self-center" }, projects[i].name, 'project-names'))
  }
  
  return { renderProjects };
};