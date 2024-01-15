<template>
  <div class="py-5">
    <div class="py-2">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <p>Esto es tercero</p>
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
          text: 'Tecero',
          href: '#',
          to: 'Tercero',
          active: true
        }

      ]
    }
  }
}
</script>

<style></style>