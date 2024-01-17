<template>
  <div class="py-5">
    <div class="py-2">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <div>
      <h3>Vuelos disponibles</h3>
      <b-button class="mx-1" variant="primary" @click="nextPage">Lineas de vuelo</b-button>
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
          text: 'Vuelos disponibles',
          href: '#',
          to: 'Disponibles'

        },

      ]
    }
  },
  methods: {
    nextPage() {
      this.$router.push('/lineasv')
    },
    returnHome() {
      this.$router.push('/inicio')
    }
  },
}
</script>

<style></style>