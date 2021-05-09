import { helper } from './helpers';
import { status } from './status';

export const db = () => {
  const projectData = (name, description, priority, duedate, todos = []) => ({
    name, description, priority, duedate, todos,
  });

  const todoData = (name, description) => ({
    name, description,
  });

  const load = () => {
    const defaultData = projectData('Default', 'Default Project', 5, 'duedate', [{ name: 'Default Todo', description: 'Default' }]);
    const storage = localStorage.getItem('projects');

    try {
      return storage ? JSON.parse(storage) : db().set('projects', [].concat(defaultData));
    } catch (ex) {
      return [].concat(defaultData);
    }
  };

  let projects = load();

  const set = (item, data) => {
    localStorage.setItem(item, JSON.stringify(data));
  };

  const get = (item) => localStorage.getItem((item));

  const add = (obj) => {
    set('projects', (projects.concat(obj)));
    return get('projects');
  };

  const parseProject = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    const newProject = db().projectData(
      formElements.name.value,
      formElements.description.value,
      formElements.priority.value,
      formElements.duedate.value,
    );
    db().set('_project', newProject);
    projects = load();
    const exists = Object.keys(projects).some((k) => projects[k].name === newProject.name);
    (exists) ? (alert('Name already exists, Choose a unique name!')) : (db().add(newProject));
    helper().renderProjects();
  };

  const addToProject = (_todo, i) => {
    const exists = Object.keys(projects[i].todos).some(
      (k) => projects[i].todos[k].name === _todo.name,
    );
    if (exists) {
      (alert('Name already exists, Choose a unique name!'));
    } else {
      projects[i].todos.push(_todo);
      db().set('projects', projects);
    }
  };

  const parseTodo = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    const newTodo = db().todoData(
      formElements.name.value,
      formElements.description.value,
    );
    db().set('_todo', newTodo);
    const i = (window.projectIndex) ? (window.projectIndex) : 0;
    db().addToProject(newTodo, i);
    helper().renderTodos(i);
  };

  const dropProject = (e) => {
    e.preventDefault();
    let i = (window.projectIndex)
    projects.splice(i,1)
    db().set('projects', projects);
    helper().renderProjects();
    document.getElementById('status-flex-container-size').remove();
    helper().clearTodos();
  }
  const dropTodo = (e) => {
    e.preventDefault();
    projects[window.projectIndex].todos.splice(window.todoIndex,1)
    db().set('projects', projects);
    helper().renderTodos(window.projectIndex);
    document.getElementById('status-flex-container-size').remove();
  }

  const editTodo = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    const updated = db().todoData(
      formElements.name.value,
      formElements.description.value
    );
  
    projects[window.projectIndex].todos[window.todoIndex] = updated;
    db().set('projects', projects);
    console.log('todo edited')

    helper().renderTodos(window.projectIndex);
    status().todoStatus(window.todoIndex)
  }

  const editProject = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    const updated = db().projectData(
      formElements.name.value,
      formElements.description.value,
      formElements.priority.value,
      formElements.duedate.value,
      projects[window.projectIndex].todos
    );
  
    projects[window.projectIndex] = updated;
    db().set('projects', projects);
    console.log('Project edited')

    helper().renderProjects();
    status().projectStatus(window.projectIndex);
  }

  return {
    projects, load, add, set, get, todoData, projectData, addToProject, parseProject, parseTodo, dropProject, dropTodo, editProject, editTodo
  };
};
