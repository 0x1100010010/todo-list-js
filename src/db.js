import { helper } from './helpers'

export const db = () => {

  const load = () => {
    const storage = localStorage.getItem('projects');

    try {
      return storage ? JSON.parse(storage) : [];
    } catch (ex) {
      return [];
    }
  };

  let projects = load();
  

  const set = (item, data) => {
    localStorage.setItem(item, JSON.stringify(data));
  };

  const get = (item) => {
    return localStorage.getItem((item));
  };

  const add = (obj) => {
    set( 'projects' ,(projects.concat(obj)))
    return get('projects')
  };

  const project_data = (name, description, priority, duedate, todos = []) => ({ 
    name, description, priority, duedate, todos
  });

  const todo_data = (name, description, startdate, duedate) => ({ 
    name, description, startdate, duedate
  });

  const addToProject = (_todo) => {
    _project.todos.push(_todo)
  }

  const parseProject = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
  
    const newProject = db().project_data(
      formElements.name.value,
      formElements.description.value,
      formElements.priority.value,
      formElements.duedate.value
    );
    db().set('_project', newProject)
    projects = load();
    let exists = Object.keys(projects).some((k)  => { return projects[k].name === newProject.name; });
    (exists) ? (alert("Name already exists, Choose a unique name!")) : (db().add( newProject ));
    console.log(localStorage)
    helper().renderProjects();
  };

  return {
    projects, load, add, set, get, todo_data, project_data, addToProject, parseProject
  };
};
