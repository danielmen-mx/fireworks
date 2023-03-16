<template>
  <div>
    <v-row>
      <v-col class="ml-16 pl-16 my-auto">
        <div v-for="(contact, i) in contact_title">
          <p :class="contact.class">{{contact.title}}</p>
        </div>
      </v-col>
      <v-col>
        <v-img src="/images/caller.png" width="60vw"></v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      contact_title: [
        {
          title: "envianos",
          class: "text-h2 font-weight-bold"
        },
        {
          title: "un sms",
          class: "text-h2 font-weight-bold text-indigo-darken-1"
        },
        {
          title: "WhatsApp",
          class: "text-h2 font-weight-bold text-teal-lighten-1"
        },
        {
          title: "llamanos",
          class: "text-h2 font-weight-bold text-orange-darken-1"
        },
        {
          title: "ó visitanos",
          class: "text-h2 font-weight-bold"
        }
      ]
    }
  },
}
</script>