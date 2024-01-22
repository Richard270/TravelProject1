<template>
  <b-container fluid>
    <b-row>
      <div id="title" class="my-5">
        <h2 class="my-3">Inicio</h2>
        <div class="my-3">
          <b-button class="mx-1" variant="primary" @click="Reservar">Reservar vuelo</b-button>
          <b-button class="mx-1" variant="success" @click="Disponible">Vuelos disponibles</b-button>
          <b-button class="mx-1" variant="danger" @click="Cancelar">Vuelos cancelados</b-button>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    Reservar() {
      this.$router.push('/reservar')
    },
    Disponible() {
      this.$router.push('/disponible')
    },
    Cancelar() {
      this.$router.push('/cancelar')
    }
  },
}
</script>
</style>