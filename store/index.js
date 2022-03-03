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

  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  
  toggle(state, { todo }) {
    todo.done = !todo.done
  }
};
