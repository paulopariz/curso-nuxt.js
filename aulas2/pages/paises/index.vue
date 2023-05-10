<template>
  <div>
    <h1>Países</h1>

    <ul>
      <li v-for="pais in paises" :key="pais.id">
        <nuxt-link :to="'paises/' + pais.id">
          {{ pais.nome }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paises: [
        {
          id: 1,
          nome: 'Brasil'
        },
        {
          id: 2,
          nome: 'Argentina'
        },
        {
          id: 1,
          nome: 'Alemanha'
        }
      ]
    }
  }
}
</script>

<style>

</style>
