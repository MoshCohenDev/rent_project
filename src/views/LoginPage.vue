<template>
    <v-content >
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 black--text text--accent-8">Sign in to</h1>
                        <div class="text-center" mt-4>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon> fab fa-facebook-f</v-icon>
                          </v-btn>
                              <v-btn class="mx-2" fab color="black" outlined>
                            <google-provider/>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon> fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mlt-4">put your mail for registration</h4>
                        <v-form>
                          <v-text-field
                            v-model="user.email"
                            label="Email"
                            name="Email"
                            type="text"
                            color="black"
                          />
                          <v-text-field
                            v-model="user.password"
                            id="password"
                            label="password"
                            name="password"
                            type="password"
                            color="black"
                          />
                        </v-form>
                        <h3 class="text-center mt-3 -bold" > ? שכחת את הסיסמא </h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn
                          rounded color="black"
                          @click="loginWithEmail"
                          dark>SIGN IN
                        </v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="black">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Hello, friend!</h1>
                        <h5 class="text-center">Enter your personal</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined="" dark @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="black">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1"> WELCOME BACK !</h1>
                        <h5 class="text-center">to keep connected</h5>

                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined="" dark @click="step--">SIGN in</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 black--text text--accent-3"> create account</h1>
                        <h4 class="text-center mt-4"> ensure your mail for register</h4>

                        <login-password/>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

</template>
<script>

import Facebook from '@/components/login/facebook';
import GoogleProvider from '@/components/login/GoogleProvider';
import LoginPassword from '@/components/login/loginPassword';
import firebaseInstance from '../middlware/firebase'

export default {
  name: 'LoginPage',
  components: {
    LoginPassword,
    GoogleProvider,
    Facebook
  },
  data: () => ({
    user:{},
    step: 1
  }),
  props: {
    source: String
  },

  methods: {

    loginWithEmail(){

      firebaseInstance.firebase.auth().signInWithEmailAndPassword(this.user.email, this.user.password)
        .then((user) => {
          console.log(user);
          this.$router.push('/Home')
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });

    }
  }

}
</script>
