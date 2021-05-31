import { db } from '../src/db';

describe('db', () => {
  it('Load with default project 1st time', () => {
    let projects = db().load();
    expect(projects.length).toBe(1);
  });
});
