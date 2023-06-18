<template>
  <div class="container">
    <!-- <input
      type="text"
      v-model="todoText"
      class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
    />
    <button @click="addTodoI" class="text-white">addTod</button> -->
    <form class="mb-0 hidden lg:flex mt-20 ml-20">
      <div class="relative">
        <input
          class="h-10 w-200 rounded-lg border-gray-200 pe-10 text-sm placeholder-gray-300 focus:z-10"
          placeholder="Добавить"
          type="text"
          v-model="todoText"
        />

        <button
          type="submit"
          class="absolute inset-y-0 end-0 rounded-r-lg p-2 text-gray-600"
          @click="addTodoI"
        >
          Добавить
        </button>
      </div>
    </form>
    <div v-for="todo in allTodos" :key="todo.id" class="flex mt-20 ml-20">
      <h1 class="text-xl text-white font-bold">
        {{ todo.title }}
      </h1>
      <button
        @click="deleteTodo(todo.id)"
        class="border rounded-l-lg p-2 text-white ml-20"
      >
        Удалить
      </button>
      <button
        type="submit"
        class="border rounded-r-lg p-2 text-white"
        @click="openEditor(todo)"
      >
        Изменить
      </button>
      <input
        type="text"
        v-bind:value="todoEditText"
        class="h-10 w-200 rounded-lg border-gray-200 pe-10 text-sm placeholder-gray-300 focus:z-10 ml-5"
        placeholder="Изменить"
        @change="todoEditTextChange"
        v-if="editing"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { v1 } from "uuid";
export default {
  name: "TodoView",
  data: function () {
    return {
      todoText: "",
      todoEditText: "",
      editing: false,
    };
  },
  methods: {
    ...mapActions(["addTodo", "deleteTodo", "updateTodo"]),
    addTodoI() {
      this.addTodo({
        id: v1(),
        title: this.todoText,
      });
    },
    todoEditTextChange(e) {
      this.todoEditText = e.target.value;
    },
    openEditor(todo) {
      this.editing = this.editing == true ? false : true;
      if (this.editing) {
        this.todoEditText = todo.text;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoEditText;
      }
    },
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },
};
</script>
