<template>
  <section class="text-white">
    <div
      class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
    >
      <div class="mx-auto max-w-3xl text-center">
        <h1
          class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          Обычный

          <span class="sm:block"> Todo List на Vue 2</span>
        </h1>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <routerLink
            class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            to="/todo"
          >
            Начать
          </routerLink>

          <a
            class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
            href="https://github.com/Feyalon/TodoVue2"
          >
            Гитхаб репозиторий
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
