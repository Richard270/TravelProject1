<template>
    <div class="py-5">
      <div class="py-2">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </div>
      <h3>Lineas de vuelo</h3>
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
            text: 'Disponible',
            href: '#',
            to: 'Disponible'
  
          },
          {
            text: 'Lineas de vuelo',
            href: '#',
            to: 'LineasR'
  
          },
  
        ]
      }
    },
    methods: {
      nextPage() {
        this.$router.push('/reservar')
      }
    },
  }
  </script>
  
  <style></style>