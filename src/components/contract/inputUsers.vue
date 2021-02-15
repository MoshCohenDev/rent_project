<template>
  <div class="main">
    <v-form :checkInputFinished="checkInputFinished" :tempUsers="tempUsers">
      <v-container class="v-size--x-large " id="tempUsers">
        <h1 style="text-align: center; padding: 20px"> פרטי השוכר</h1>
        <v-row class="col-12">
          <v-text-field v-model="tempUsers.nameRenting" :rules="rules" filled label="שם השוכר" type="text"
                        style="margin-right: 10px"/>
          <v-text-field v-model="tempUsers.idRenting" :rules="rules" filled label="תעודת זהות שוכר" type="number"/>
        </v-row>
        <h1 style="text-align: center; padding: 20px"> פרטי משכיר</h1>
        <v-row class="col-12">
          <v-text-field v-model="tempUsers.nameRenter" :rules="rules" filled label="שם המשכיר" type="text"
                        style="margin-right: 10px"/>
          <v-text-field v-model="tempUsers.idRenter" :rules="rules" filled label="תעודת זהות משכיר" type="number"/>
        </v-row>
        <br>
        <h1> תשלומים</h1>
        <v-row class="col-12" style="margin-right: 10px"/>
        <v-text-field v-model="tempUsers.price" :rules="rules" filled label="תשלום שכירות קבוע " type="number"/>
        <v-text-field v-model="tempUsers.priceOfBuild" :rules="rules" filled label="ועד בית  " type="number"/>
        <h1 style="text-align: center; padding: 20px"> פרטי נכס</h1>
        <v-row class="col-12">
          <v-text-field ref="QautoComplete" v-model="tempUsers.Address" :rules="rules"
                        style="margin-right: 10px"/>
          <v-text-field v-model="tempUsers.roomOfApartment" :rules="rules" filled label="מספר חדרים" type="number"/>
        </v-row>
        <v-btn color="blue" @click="submit()"> שמור והמשך</v-btn>
      </v-container>
      <h1 style="text-align: center; padding: 20px">תקופת השכירות</h1>

      <div id="app" style="width: 40%;display:inline-flex">
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          min-width="290px"
          offset-y
          transition="scale-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="tempUsers.dateEnd"
              v-bind="attrs"
              v-on="on"
              label="תאריך יציאה "
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="tempUsers.dateEnd"
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>

        <v-menu
          v-model="menu1"
          :close-on-content-click="false"
          :nudge-right="40"
          min-width="290px"
          offset-y
          transition="scale-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="tempUsers.dateStart"
              v-bind="attrs"
              v-on="on"
              label="תאריך כניסה "
              prepend-icon="mdi-calendar"
              readonly
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="tempUsers.dateStart"
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>

      </div>


    </v-form>
  </div>
</template>
<script>
import firebaseApi from '../../middlware/firebaseApi';
import { mapState, mapActions } from 'vuex';
import AutoComplete from '@/components/contract/googleLoction/AutoComplete';

export default {
  name: 'inputUsers',
  props: ['enableButton'],
  components: { AutoComplete },

  data: () => ({
    rules: [
      value => !!value || 'Required.',],
    menu1: false,
    menu2: false,
    tempUsers:
      {
        dateStart: new Date().toISOString()
          .substr(0, 10),
        dateEnd: new Date().toISOString()
          .substr(0, 10),
        nameRenting: '',
        nameRenter: '',
        idRenting: '',
        idRenter: '',
        Address: '',
        roomOfApartment: '',
        priceOfBuild: '',
        price: '',
      },

  }),
  computed: {
    checkInputFinished() {
      this.enableButton
      (this.tempUsers.idRenting.length < 0);

    }
  },
  mounted() {
    let defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));

    let input = document.getElementById(this.$refs.QautoComplete.$refs.input.id);
    let options = {
      bounds: defaultBounds,
      types: ['establishment']
    };

    let autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.addListener('place_changed', () => {
      this.vacation.placeName = autocomplete.getPlace().formatted_address;
    });
  },
  methods: {
    ...mapActions('users', ['insertUsers']),

    submit() {
      this.insertUsers(this.tempUsers);
      // this.tempUsers = false;
      // Object.keys(this.form)
      // debugger
      // this.insertUsers(this.)
      //   .forEach(f => {
      //     debugger
      //     if (!this.form[f]) this.tempUsers = true;
      //     this.$refs[f].validate(true);
      //
      //   });
    },
  }
};
</script>

<style lang="scss" scoped>
#tempUsers {
  width: 70%;
}

</style>
