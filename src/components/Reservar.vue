<template>
  <div class="py-5">
    <div class="py-2">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <div>
      <h3>Reservar vuelo</h3>
      <b-button class="mx-1" variant="primary" @click="nextPage">Asientos Reservados</b-button>
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
          text: 'Reservar',
          href: '#',
          to: 'Reservar'

        },

      ]
    }
  },
  methods: {
    nextPage() {
      this.$router.push('/asientosr')
    },
    returnHome() {
      this.$router.push('/inicio')
    }
  },
}
</script>

<style></style>