import { helper } from './helpers'

export const db = () => {

  const project_data = (name, description, priority, duedate, todos = []) => ({ 
    name, description, priority, duedate, todos
  });

  const todo_data = (name, description) => ({ 
    name, description
  });

  const load = () => {
    let _default = project_data('Default', 'Default Project', 5, 'duedate', [{name: 'Default Todo', description: 'Default'}])
    const storage = localStorage.getItem('projects');

    try {
      return storage ? JSON.parse(storage) : db().set('projects', [].concat(_default));
    } catch (ex) {
      return [].concat(_default);
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

  const addToProject = (_todo, i) => {
    projects[i].todos.push(_todo)
    db().set('projects', projects)
    console.log('parseTodo!',projects[i].todos, localStorage)
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

  const parseTodo = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;
  
    const newTodo = db().todo_data(
      formElements.name.value,
      formElements.description.value
    );
    db().set('_todo', newTodo)
    // let i = (window.projectIndex) ? (window.projectIndex): 0;
    db().addToProject(newTodo, (window.projectIndex) ? (window.projectIndex): 0)
  }

  return {
    projects, load, add, set, get, todo_data, project_data, addToProject, parseProject, parseTodo
  };
};
