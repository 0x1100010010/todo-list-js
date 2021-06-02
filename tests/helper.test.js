import { helper } from '../src/helpers';

describe('helpers.js Test Cases', () => {
  it('Should return Helper methods', () => {
    document.body.innerHTML = '<div id=\'body-flex-container\'></div>';
    expect(Object.keys(helper())).toEqual(['renderProjects', 'renderTodos', 'clearTodos']);
  });
});