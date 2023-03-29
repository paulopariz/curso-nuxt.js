<template>
  <div>
    <div class="container p-4 m-auto">
      <h1 class="text-lg text-black font-semibold">Serviços</h1>
      <div
        class="flex items-center justify-center gap-7 py-2 px-5 bg-gray-200 rounded-xl mt-4 mb-4"
      >
        <nuxt-link
          class="text-green-700 font-bold text-sm"
          to="/servicos/desenvolvimento-de-sites"
          >Desenvolvimento de Sites</nuxt-link
        >
        <span class="text-gray-300 font-bold">|</span>
        <nuxt-link
          class="text-green-700 font-bold text-sm"
          to="/servicos/marketing-digital"
          >Markenting digital</nuxt-link
        >
      </div>

      <nuxt-child />

      <br />
      <br />

      <br />

      <div v-if="$fetchState.pending">Carregando...</div>

      <div v-else>
        <div
          v-for="service in services"
          :key="service.id"
          class="border-b border-gray-500 py-5"
        >
          <pre>{{ service.username }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Minha descrição do serviço",
        },
      ],
      bodyAttrs: {
        class: "bg-gray-300",
      },
    };
  },

  data() {
    return {
      services: [],
      title: "Carregando...",
    };
  },

  async fetch() {
    this.services = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users?_limit=3"
    );
    console.log(this);
  },

  created() {
    this.getTitle();
  },

  methods: {
    getTitle() {
      setTimeout(() => {
        this.title = "Serviços";
      }, 2000);
    },
  },
};
</script>

<style></style>
