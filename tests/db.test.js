import { db } from '../src/db';

describe('db.js Test Cases', () => {
  it('Should return Project Object with given data', () => {
    const project = db().projectData('Project1', 'Project Description', 10, '2/1/2020');
    expect(project.name).toBe('Project1');
  });

  it('Should return Todo Object with given data', () => {
    const todo = db().todoData('Todo1', 'Todo Description');
    expect(todo.name).toBe('Todo1');
  });

  it('Should return empty if no args given', () => {
    const project = db().projectData();
    expect(project.name).toBe();
  });

  it('Load with default project at Initialization', () => {
    db().load();
    expect(db().projects.length).toBe(1);
  });

  it('Add project', () => {
    const project = db().projectData('Project1', 'Project Description', 10, '2/1/2020');
    db().add(project);
    db().set('projects', db().projects);
    db().load();
    expect(db().projects.length).toBe(2);
  });

  it('Add one todo to specific project', () => {
    const todo = db().todoData('Todo1', 'Todo Description');
    const index = 1;
    db().load();
    db().addToProject(todo, index);
    expect(db().projects[index].todos.length).toBe(1);
  });

  it('Remove specific todo from specific project', () => {
    const projectIndex = 1;
    const todoIndex = 0;
    const projects = db().load();
    projects[projectIndex].todos.splice(todoIndex, 1);
    db().set('projects', projects);
    expect(db().projects[projectIndex].todos.length).toBe(0);
  });

  it('Removes project at spcific index', () => {
    const { projects } = db();
    const index = 0;
    projects.splice(index, 1);
    db().set('projects', projects);
    db().load();
    expect(db().projects.length).toBe(1);
  });
});
