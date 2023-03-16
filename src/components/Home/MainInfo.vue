<template>
  <v-card-text>
    <p class="text-h4 text--primary font-weight-bold text-grey-darken-3">Show animado para Baby Shower, Fiestas de Cumpleaños y más, actualizando</p>
  </v-card-text>
  <v-divider></v-divider>
  <v-card-text class="py-4 px-6">
    <p class="text-h6">Paquete incluye:</p>
    <v-list density="compact">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <template v-slot:prepend>
          <v-icon>{{item.icon}}</v-icon>
        </template>

        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card-text>
  <v-divider></v-divider>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Animadora",
          icon: "mdi-human-female"
        },
        {
          title: "DJ (Auxiliar)",
          icon: "mdi-play-circle"
        },
        {
          title: "Equipo de sonido",
          icon: "mdi-music"
        },
        {
          title: "Concursos dinámicos",
          icon: "mdi-soccer"
        },
        {
          title: "Apertura de regalos",
          icon: "mdi-gift"
        },
        {
          title: "2 horas de animación",
          icon: "mdi-numeric-2-box-outline"
        },
        {
          title: "Diversión 100% garantizada",
          icon: "mdi-star-circle"
        },
      ]
    }
  },
}
</script>