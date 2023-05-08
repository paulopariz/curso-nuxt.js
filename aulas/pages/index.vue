<template>
  <div>
    <pre class="bg-gray-200">
      {{ $config }}
    </pre>

    <br />
    <pre>
      {{ $store.state.user }}
    </pre>
    <br />
    <br />

    <pre class="bg-gray-200">
      {{ user }}
    </pre>

    <br />
    <br />

    {{ user.nome + " " + user.sobrenome }}
    <br />
    {{ date }}
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
    return {
      date: "",
    };
  },

  mounted() {
    console.log(this.$dayjs().format());
    this.date = this.$dayjs().format();
  },

  asyncData({ $config }) {
    console.log($config);
  },

  created() {
    console.log(this.$config.fc_api_key);
    console.log(this.$name("Paulo"));
  },

  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>
