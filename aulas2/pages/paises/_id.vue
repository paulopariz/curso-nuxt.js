<template>
  <div>
    <h1>País: {{ id }}</h1>
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      id: this.$route.params.id,
      pais: [
        { id: 1, nome: 'Brasil' },
        { id: 2, nome: 'Argentina' },
        { id: 1, nome: 'Alemanha' }
      ].find(x => x.id === +this.$route.params.id)
    }
  },
  head () {
    return {
      title: this.pais.nome,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tudo sobre ' + this.pais.nome
        }
      ]
    }
  }
}
</script>

<style></style>
