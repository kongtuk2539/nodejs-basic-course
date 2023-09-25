let nextId = 5;

const todoDatabase = {
  1: { id: 1, title: "Buy a book" },
  2: { id: 2, title: "Go to school" },
  3: { id: 3, title: "Dinner with the friends" },
};

export const listTodos = () => {
  // Implement logic here to list all todos
  return Object.values(todoDatabase);
};

export const findTodo = (todoId) => {
  // Implement logic here to find a single todo by id
  return todoDatabase[todoId];
};

export const createTodo = ({ title }) => {
  // Implement logic here to create a new todo
  // 1. Create todo object with the new id from `nextId`
  const newTodo = { id: nextId, title };
  // 2. Add the new todo object
  todoDatabase[nextId] = newTodo;
  // 3. increment the `nextId`
  nextId++;
  // 4. return a new todo
  return newTodo;
};
