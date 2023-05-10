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
      id: this.$route.params.id
    }
  }
}
</script>

<style></style>
