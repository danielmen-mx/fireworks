<template>
  <v-card>
    <v-layout>
      <Navigation />
      <v-main >
        <DialogInfo />
        <Snackbar />
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
import DialogInfo from '@/components/Layout/DialogInfo.vue'
import Snackbar from '@/components/Layout/Snackbar.vue'

export default {
  components:{
    Navigation,
    Footer,
    DialogInfo,
    Snackbar
  }
}
</script>