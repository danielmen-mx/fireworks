<template>
  <div class="d-flex w-100 align-center px-4 pt-2" >
    <p class="text-subtitle-1">Siguenos en nuestras paginas!</p>

    <v-spacer></v-spacer>

    <v-tooltip location="top"
      v-for="icon in icons"
      :key="icon.icon"
      :text="icon.text"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="mx-4"
          variant="plain"
          size="small"
          :icon="icon.icon"
          @click="action(icon)"
        ></v-btn>
      </template>
    </v-tooltip>
  </div>
  <v-footer class="elevation-2" color="">
    <v-row justify="center" no-gutters>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Momentos Mágicos</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      icons: [
        {
          icon: 'mdi-facebook',
          text: 'Click to redirect',
          url: 'https://www.facebook.com/profile.php?id=100089471205980'
        },
        {
          icon: 'mdi-twitter',
          text: 'Proximamente...',
          url: null
        },
        {
          icon: 'mdi-instagram',
          text: 'Proximamente...',
          url: null
        }
      ],
  }),
    methods: {
      action(data) {
        if (!data.text.includes('Proximamente')) {
          window.location = data.url
        }
      }
    },
  }
</script>