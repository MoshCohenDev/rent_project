<template>
  <div>
    <v-form>
      <v-text-field
        v-model="userName"
        color="teal-accent-3"
        label="Name"
        name="Name"
        type="text"
      />
      <v-text-field
        v-model="email"
        color="teal accent-8"
        label="Email"
        name="Email"
        type="text"
      />
      <v-text-field
        id="password"
        v-model="password"
        color="teal accent-8"
        label="password"
        name="password"
        type="password"
      />
    </v-form>
    <div class="text-center mt-n5; pa-3">
      <v-btn
        color="black accent-8" dark
        rounded
        @click="crateLoginInPassword">SIGN UP
      </v-btn>
    </div>

  </div>
</template>

<script>
import firebaseInstance from '../../middlware/firebase';

export default {
  name: 'loginPassword',
  data() {
    return {
      userName: '',
      email: '',
      password: '',
    };
  },

  methods: {
    crateLoginInPassword() {

      firebaseInstance.firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(res => {
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');

          } else {
            alert(errorMessage);
          }
        });

    },
    // logOutPassword(){
    //
    //   firebaseInstance.auth().signOut(this.email,this.password).then(res => {
    //   }
    //   )
    //   .catch(function(error) {
    //   });
    // },
  },
};

</script>

<style scoped>

</style>
