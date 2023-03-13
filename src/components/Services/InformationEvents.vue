<template>
  <v-container class="text-center text-h4 text-grey-darken-2 mx-auto">
    <div class="py-6">
      <span class="text-h2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
    </div>
    <div class="mt-6">
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda incidunt dolores eaque fugit quam nemo, autem ea debitis placeat accusamus harum ratione repellat reprehenderit earum ex veniam sapiente id! Reiciendis.</span>
    </div>
    <v-divider class="my-10"></v-divider>
    <v-card class="elevation-0 text-center text-h4 text-grey-darken-2 mx-auto" v-for="(event, i) in data">
      <v-row>
        <v-col class="my-auto">
          <div v-if="event.side == 'right'">
            <div class="text-h3 pb-6">
              <span>{{ event.title }}</span>
            </div>
            <span>{{ event.description }}</span>
          </div>
          <div v-else>
            <v-col class="my-auto">
              <v-img :src="event.image" height="500"></v-img>
            </v-col>
          </div>
        </v-col>
        <v-col class="my-auto">
          <div v-if="event.side == 'right'">
            <v-img :src="event.image" height="500"></v-img>
          </div>
          <div v-else>
            <div class="text-h3 pb-6">
              <span>{{ event.title }}</span>
            </div>
            <span>{{ event.description }}</span>
          </div>
        </v-col>
      </v-row>
      <v-divider class="my-10"></v-divider>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          title: "Fiesta infantil",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ea consequuntur quae assumenda in nobis ducimus quas quis vitae placeat accusantium aut, neque cumque. Pariatur nisi delectus qui consectetur dicta!",
          image: "/public/events_photos/4.jpeg",
          side: "right"
        },
        {
          title: "Baby Shower",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ea consequuntur quae assumenda in nobis ducimus quas quis vitae placeat accusantium aut, neque cumque. Pariatur nisi delectus qui consectetur dicta!",
          image: "/public/events_photos/8.jpeg",
          side: "left"
        },
        {
          title: "Despedida de soltera",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ea consequuntur quae assumenda in nobis ducimus quas quis vitae placeat accusantium aut, neque cumque. Pariatur nisi delectus qui consectetur dicta!",
          image: "/public/events_photos/12.jpeg",
          side: "right"
        },
        {
          title: "Show adolescentes/adultos",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ea consequuntur quae assumenda in nobis ducimus quas quis vitae placeat accusantium aut, neque cumque. Pariatur nisi delectus qui consectetur dicta!",
          image: "/public/events_photos/16.jpeg",
          side: "left"
        },
      ]
    }
  },
}
</script>