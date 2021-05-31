import { codefactory } from '../src/codefactory';

describe('codefactory.js Test Cases', () => {

  it ('Should return element with given parameters', () => {
    document.body.innerHTML = `<div id='test-parent-id'></div>`;
    const element = codefactory('div', { class: 'test-class', id: 'test-id', testAttribute: 'test-attribute-value' }, 'Test Content', 'test-parent-id');
    expect(element.classList.contains('test-class')).toBe(true);
    expect(element.getAttribute("id") ).toBe('test-id');
    expect(element.getAttribute("testAttribute") ).toBe('test-attribute-value');
    expect(element.innerText ).toBe('Test Content');
  });

  it ('Should append element as child', () => {
    document.body.innerHTML = `<div id='test-parent-id'></div>`;

    const parent = codefactory('div', { class: 'test-class', id: 'test-id', testAttribute: 'test-attribute-value' }, 'Test Content', 'test-parent-id');
    const child = codefactory('div', { class: 'child-class', id: 'child-id', childAttribute: 'child-attribute-value' }, 'Child Content', 'test-id');
    expect(parent.innerHTML ).toBe(child.outerHTML);
  });
});