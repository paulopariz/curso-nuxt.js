<template>
  <div>
    <div>
      <div class="bg-gray-100 p-3 gap-6 flex item center">
        <nuxt-link :to="{ name: 'empresa' }">Empresa</nuxt-link>
        <nuxt-link to="/servicos">Serviços</nuxt-link>
        <nuxt-link to="/produtos">Produtos</nuxt-link>
      </div>

      <div class="container p-4 m-auto">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
