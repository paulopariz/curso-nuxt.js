<template>
  <div>
    <pre>
      {{ $store.state.user }}
    </pre>
    <br />
    <br />

    <pre>
      {{ user }}
    </pre>

    <br />
    <br />

    {{ user.nome + " " + user.sobrenome }}
    <br />

    <VTooltip>
      <a>Sponsor me</a>

      <template #popper> Help me fund my Open Source work! </template>
    </VTooltip>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "IndexPage",

  data() {
    return {};
  },

  mounted() {
    console.log(this.$dayjs().format());
  },

  created() {
    console.log(this.$name("Paulo"));
  },

  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>
