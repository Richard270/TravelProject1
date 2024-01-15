<template>
  <div class="py-5">
    <div class="py-2">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <p>Esto es inicio</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Inicio",
          href: "",
          to: "Inicio"
        },
        {
          text: "Main",
          href: "",
          to: "Main"
        },
        {
          text: "Tecero",
          href: "",
          to: "Tercero"
        },
      ],
    };
  },
};
</script>

<style></style>