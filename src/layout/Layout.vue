<template>
  <v-card>
    <v-layout>
      <Navigation />
      <v-main >
        <div class="pa-1" style="min-height: 86vh">
          <router-view />
        </div>
        <Footer />
      </v-main>
    </v-layout>
  </v-card>
</template>
<script>
import Navigation from '@/components/Layout/Navigation.vue'
import Footer from '@/components/Layout/Footer.vue'

export default {
  components:{
    Navigation,
    Footer
  }
}
</script>