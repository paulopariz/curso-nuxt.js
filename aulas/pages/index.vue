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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "IndexPage",
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>
