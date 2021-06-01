import { form } from '../src/form';
import { codefactory } from '../src/codefactory';

describe('forms.js Test Cases', () => {
  it('Should return project form with all fields', () => {
    document.body.innerHTML = '<div id=\'body\'></div>';
    const projectForm = codefactory('form', { id: 'project-form', name: 'project-form' }, '', 'body');
    form().project();
    expect(projectForm.length).toBe(5);
  });

  it('Should return project form with all fields', () => {
    document.body.innerHTML = '<div id=\'body\'></div>';
    const todoForm = codefactory('form', { id: 'todo-form', name: 'todo-form' }, '', 'body');
    form().todo();
    expect(todoForm.length).toBe(3);
  });
});