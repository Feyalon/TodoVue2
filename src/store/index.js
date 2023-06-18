import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    allTodos(state) {
      localStorage.setItem("storedTodos", state.todos);
      let todos = state.todos;
      return todos;
    },
  },

  actions: {
    addTodo({ commit }, todo) {
      commit("add_todo", todo);
    },
    deleteTodo({ commit }, id) {
      commit("deleteTodo", id);
    },
    updateTodo({ commit }, todo) {
      commit("updateTodo", todo);
    },
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
      console.log(state.todos);
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    updateTodo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id);
      if (index != 1) {
        state.todos[index] = todo;
      }
    },
  },
  plugins: [createPersistedState()],
  modules: {},
});
