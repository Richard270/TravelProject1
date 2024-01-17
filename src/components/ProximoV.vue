<template>
    <div class="py-5">
      <div class="py-2">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </div>
      <div>
        <h3>Próximos vuelos</h3>
        <b-button class="mx-1" variant="danger" @click="nextPage">Regresar</b-button>
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
          {
            text: 'Próximos vuelos',
            href: '#',
            to: 'ProximoV'
          },
        ]
      }
    },
    methods: {
      nextPage() {
        this.$router.push('/cancelar')
      }
    },
  }
  </script>
  
  <style></style>