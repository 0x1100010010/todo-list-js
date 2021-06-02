import { status } from '../src/status';

describe('status.js Test Cases', () => {
  it('Should return Status methods', () => {
    document.body.innerHTML = '<div id=\'body-flex-container\'></div>';
    expect(Object.keys(status())).toEqual(['projectStatus', 'todoStatus']);
  });
});