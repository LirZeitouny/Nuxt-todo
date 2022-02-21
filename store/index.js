import { v4 as uuidv4 } from "uuid";

export const state = () => ({ list: [] });

export const mutations = {
  add(state, { title, description }) {
    state.list.push({
      id: uuidv4(),
      title,
      description,
      done: false,
    });
  },

  remove(state, { id }) {
    const todo = state.find((todo) => todo.id == id);
    if (todo) state.splice(state.indexOf(todo), 1);
  },
};
