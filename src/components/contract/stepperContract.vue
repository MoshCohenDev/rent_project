<template>
  <div class="stepper">
    <v-stepper v-model="e1">

      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" color="blue" step="1"> פרטים אישיים</v-stepper-step>
        <v-stepper-step :complete="e1 > 2" color="blue" step="2">סוגי חוזה</v-stepper-step>
        <v-stepper-step color="blue" step="3">העלאת תמונות</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items class="stepperBtn">
        <v-stepper-content step="1">
          <v-card class="mb-12" height="100%">
            <input-users :enableButton="enableButton"/>
          </v-card>
          <v-btn class="btn" :disabled="disableButton" type="submit" color="blue" @click="e1= 2 ; submit()">Continue
          </v-btn>
          <v-btn color="blue">back</v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card
            class="mb-12"
            height="100%"
          ></v-card>
          <select-contract/>
          <v-btn color="blue" @click="e1 = 3">Continue</v-btn>
          <v-btn color="blue" @click="e1=1">back</v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" color="" height="100%"/>
          <upload-image-video/>
          <v-btn color="blue" @click="goToHome">Continue</v-btn>
          <v-btn color="blue" @click="e1=2">back</v-btn>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card class="mb-12" color="" height="100%"/>
          <upload-image-video/>
          <v-btn color="blue" @click="goToHome">finish</v-btn>
          <v-btn color="blue" @click="e1=3">back</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import InputUsers from '@/components/contract/inputUsers';
import UploadImageVideo from '@/components/contract/uploadImageVideo';
import { mapActions } from 'vuex';
import SelectContract from '@/components/contract/selectContract';

export default {
  name: 'stepperContract',
  props: ['tempUsers'],
  components: {
    SelectContract,
    UploadImageVideo,
    InputUsers
  },
  data() {
    return {
      e1: 1,
      disableButton: true
    };
  },
  methods: {
    ...mapActions('users', ['insertUsers']),

    goToHome() {
      if (this.e1 === 3) {
        this.$router.push('/home');
      }
    },
    enableButton(boll) {
      this.disableButton = boll;
    },
    submit() {
      debugger
      this.insertUsers(this.tempUsers);

    }
  }
};
</script>

<style scoped>
.stepper {
  padding: 20px;
  display: block;
  margin: 20px;
}
.stepperBtn {
  text-align: center;}
</style>
