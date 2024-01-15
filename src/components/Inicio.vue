<template>
  <b-container fluid>
    <b-row>
      <div class="">
      </div>
      <div class="my-5">
        <h3>Landing Page</h3>
        <div class="my-4">
          <b-button class="mx-2" variant="outline-primary" @click="nextPage">Reservar vuelo</b-button>
          <b-button class="mx-2" variant="outline-success">Vuelos disponibles</b-button>
          <b-button class="mx-2" variant="outline-danger">Vuelos cancelados</b-button>
        </div>
      </div>
    </b-row>

  </b-container>
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
          text: 'Tecero',
          href: '#',
          to: 'Tercero'

        }
      ],
      methods: {
        nextPage() {
          this.$router.push('tercero');
        }
      }
    }
  }
}
</script>
<style></style>