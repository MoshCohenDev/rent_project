<template>
  <v-card
    class="mx-auto"
    max-width="100%"
  >
    <v-container style="margin: 30px; padding: 40px">
      <v-timeline class="font-weight-bold">
        <v-timeline-item >מילוי פרטים אישיים</v-timeline-item>
        <v-timeline-item class="text-right" style="background-color: darkgrey" >
          יצירת חוזה/בחירת חוזה קיים
        </v-timeline-item>
        <v-timeline-item>העלאת תמונות הדירה </v-timeline-item>
        <v-timeline-item class="text-right" style="background-color: darkgrey" >
          שמירת הנתונים במאגר
        </v-timeline-item>
      </v-timeline>
      <br/>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="500px"
            >
              <v-card-title v-text="card.title" style="margin: 30px"></v-card-title>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

</template>

<script>
export default {
  name: 'cardHome',
  data: () => ({
    cards: [
      {
        title:  '',
        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg',
        flex: 12
      },
      {
        title: 'הדרך לשכירות שיתופית ',
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        flex: 6
      },
      {
        title: 'Best airlines',
        src: 'https://lh3.googleusercontent.com/proxy/-ZDl_CUTH91miVSm4t8pbPqxVttcHYbNTCXPOpEkl-eTTyCUWuvYqTOxM-cy5Du1agenTzvFy3NACjOcIJpBXMn2pdWYLDJwkRGgrtEABlHwqW4HrZV1BCgNeg',
        flex: 6
      },
    ],
  }),
};
</script>


<style scoped>

</style>
