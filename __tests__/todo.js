/* eslint-disable no-undef */
const list = require("../todo");
let today = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = list();

describe("Testing Todolist", () => {
  beforeAll(() => {
    add({
      title: "DSA algorithms",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add new items in list", () => {
    // expect(all.length).toBe(0);

    let length = all.length;

    add({
      title: "Learning NodeJS!",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Marking complete a Todo", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Retrieving all todos that are overdue", () => {
    let TODOSlist = overdue();

    expect(
      TODOSlist.every((todo) => {
        return todo.dueDate < today;
      })
    ).toBe(true);
  });

  test("Retrieving all todos that are dueToday", () => {
    let TODOSlist = dueToday();

    expect(
      TODOSlist.every((todo) => {
        return todo.dueDate === today;
      })
    ).toBe(true);
  });

  test("retrieving all todos that are dueLater", () => {
    let TODOSlist = dueLater();

    expect(
      TODOSlist.every((todo) => {
        return todo.dueDate > today;
      })
    ).toBe(true);
  });
});
