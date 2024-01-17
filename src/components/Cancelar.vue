<template>
  <div class="py-5">
    <div class="py-2">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <div>
      <h3>Vuelos Cancelados</h3>
      <b-button class="mx-1" variant="primary" @click="nextPage">Próximos vuelos</b-button>
      <b-button class="mx-1" variant="success" @click="returnHome">Home</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Inicio',
          href: '',
          to: 'Inicio'
        },
        {
          text: 'Vuelos cancelados',
          href: '#',
          to: 'Cancelar'

        },

      ]
    }
  },
  methods: {
    nextPage() {
      this.$router.push('/proximoV')
    },
    returnHome() {
      this.$router.push('/inicio')
    }
  },
}
</script>

<style></style>