<template>
  <div>
    <client-only>
      <vue-typer :text="'Países favoritos' + totalFavoritos" />
    </client-only>

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
    <!--PLUGIN-->
    <!-- <carousel>
      <slide>
        <v-img :width="295" aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" />
      </slide>
      <slide>
        <v-img :width="295" aspect-ratio="16/9" cover src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" />
      </slide>
    </carousel> -->
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
