<template>
  <div>
    <h1>Países favoritos {{ totalFavoritos }}</h1>

    <ul>
      <li v-for="pais in favoritos" :key="pais.id">
        <nuxt-link :to="'paises/' + pais.id">
          {{ pais.nome }}
        </nuxt-link>
        <v-btn depressed color="error" @click="deletarFavorito(pais.id)">
          Remover
        </v-btn>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters('paises', ['favoritos', 'totalFavoritos'])
  },
  methods: {
    ...mapActions('paises', ['addFavorito', 'deletarFavorito'])
  }
}
</script>

<style>

</style>
