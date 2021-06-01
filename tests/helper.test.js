import { helper } from '../src/helpers';

describe('helpers.js Test Cases', () => {

  it ('Should return status mthods', () => {
    document.body.innerHTML = `<div id='body-flex-container'></div>`;
    console.debug(helper())
    expect(Object.keys(helper())).toEqual(["renderProjects", "renderTodos", "clearTodos"]);
  });
})