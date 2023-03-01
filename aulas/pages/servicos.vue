<template>
  <div>
    <div class="bg-gray-100 p-3 gap-6 flex item center">
        <nuxt-link to="/empresa">Empresa</nuxt-link>
        <nuxt-link to="/servicos">Serviços</nuxt-link>
        <nuxt-link to="/produtos">Produtos</nuxt-link>

    </div>
    <div class=" container p-4 m-auto">
      <h1 class="text-lg text-black font-semibold">Serviços</h1>
      <div
          class="flex items-center w-1/3 justify-center gap-7 py-2 px-5 bg-gray-200 rounded-xl mt-4 mb-4"
        >
          <nuxt-link class="text-green-700 font-bold text-sm" to="/servicos/desenvolvimento-de-sites">Desenvolvimento de Sites</nuxt-link
          >
          <span class="text-gray-300 font-bold">|</span>
          <nuxt-link class="text-green-700 font-bold text-sm" to="/servicos/marketing-digital">Markenting digital</nuxt-link>
        </div>
    <br><br>

    <NuxtChild />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
