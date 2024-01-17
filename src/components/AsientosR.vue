<template>
    <div class="py-5">
      <div class="py-2">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </div>
      <h3>Asientos Rerervados</h3>
      <b-button class="mx-1" variant="danger" @click="nextPage">Regresar</b-button>
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
          {
            text: 'Asientos Reservados',
            href: '#',
            to: 'AsientosR'
  
          },
  
        ]
      }
    },
    methods: {
      nextPage() {
        this.$router.push('/reservar')
      },
    },
  }
  </script>
  
  <style></style>