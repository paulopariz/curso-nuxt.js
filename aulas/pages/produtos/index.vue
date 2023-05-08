<template>
  <div>
    <div class="container p-4 m-auto">
      <h1 class="text-lg text-black font-semibold">Produtos</h1>
      <div
        class="flex items-center w-80 justify-center gap-7 py-2 px-5 bg-gray-200 rounded-xl mt-4 mb-4"
      >
        <nuxt-link class="text-green-700 font-bold text-sm" to="/produtos/produto-a"
          >Produtos A</nuxt-link
        >
        <span class="text-gray-300 font-bold">|</span>
        <nuxt-link class="text-green-700 font-bold text-sm" to="/produtos/produto-b"
          >Produtos B</nuxt-link
        >
      </div>
      <br />
      <br />

      <div
        v-for="produto in produtos"
        :key="produto.id"
        class="border-b border-gray-500 py-5"
      >
        {{ produto.title }}
      </div>

      <br />
      <br />

      <p class="text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore explicabo maxime
        vero sequi ab nulla sunt, distinctio iste. Ab quaerat harum qui necessitatibus
        voluptate natus, magni maxime veniam totam saepe!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  async asyncData({ $axios }) {
    const produtos = await $axios.$get("posts?_limit=3");

    return {
      produtos,
    };
  },
};
</script>

<style></style>
