export const db = () => {

  const load = () => {
    const storage = localStorage.getItem('projects');

    try {
      return storage ? JSON.parse(storage) : [];
    } catch (ex) {
      return [];
    }
  };

  const projects = load();


  const save = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
  };


  const set = (item, data) => {
    localStorage.setItem(item, JSON.stringify(data));
  };

  const get = (item) => {
    const storage = localStorage.getItem(item);

    try {
      return storage ? JSON.parse(item) : [];
    } catch (ex) {
      return [];
    }
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

  return {
    projects, save, load, set, get, todo_data, project_data, addToProject
  };
};
