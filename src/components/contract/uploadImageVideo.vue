<template>
  <div style="width: 70%;margin: auto">
    <v-file-input
      v-model="imgFile"
      label="File input"
      filled
      prepend-icon="mdi-camera"
    ></v-file-input>
    <v-btn @click="UploadImage(imgFile)">confirm</v-btn>
    <v-carousel>
      <v-card >
      <v-carousel-item
        v-for="(img,i) in imageUp"
        :key="i"
        :src="img"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      </v-card>
    </v-carousel>
  </div>

</template>


<script>
import { mapActions,mapState } from 'vuex';

export default {
  name: 'uploadImageVideo',
  data() {
    return {
      imgFile: [],
      items: [
        {
          src: '',
        }
      ]

    };
  },
  methods: {
    ...mapActions('contracts', ['uploadImg']),

    UploadImage(file) {
      this.items.push(file);
      debugger
      this.uploadImg(file);
    }
  },
  computed:mapState('contracts', ['imageUp'])
};
</script>

<style scoped>

</style>
