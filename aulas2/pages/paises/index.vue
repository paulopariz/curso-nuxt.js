<template>
  <div>
    <h1>Países</h1>

    <ul>
      <li v-for="pais in paises" :key="pais.id">
        <nuxt-link :to="'paises/' + pais.id">
          {{ pais.nome }}
        </nuxt-link>
        <v-btn depressed color="primary" @click="addFavorito(pais)">
          Add
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      paises: [
        { id: 1, nome: 'Brasil' },
        { id: 2, nome: 'Argentina' },
        { id: 1, nome: 'Alemanha' }
      ]
    }
  },
  methods: {
    ...mapActions('paises', ['addFavorito'])
  }
}
</script>

<style>

</style>
