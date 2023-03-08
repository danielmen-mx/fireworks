<template>
  <v-footer class="elevation-2" color="purple-lighten-1">
    <v-row justify="center" no-gutters>
      <!-- <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn> -->
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
    }),
  }
</script>