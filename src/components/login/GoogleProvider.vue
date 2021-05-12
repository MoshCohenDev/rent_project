<template>
  <div class="q-pa-lg">
      <v-icon  @click="login"> fab fa-google-plus-g</v-icon>
    </div>
</template>
<script>
import firebaseInstance from '../../middlware/firebase'

export default {
  name: "GoogleProvider",
  data() {
    return {
      text: ''
    }
  },

  methods: {
    login() {
      var provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
      const self = this
      firebaseInstance.firebase.auth().signInWithPopup(provider).then(result => {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user)
        self.$router.push('/home')
        // ...
      }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
      });

    },

  }
}
</script>

<style scoped>

</style>
