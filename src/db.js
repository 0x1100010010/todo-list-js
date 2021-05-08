import { helper } from './helpers';

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

  return {
    projects, load, add, set, get, todoData, projectData, addToProject, parseProject, parseTodo,
  };
};
