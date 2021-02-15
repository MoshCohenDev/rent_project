<template>
  <div>
    <v-app
      id="inspire">
      <v-navigation-drawer v-if="user" v-model="drawer" app dark>
        <v-list-item style="text-align: center">
          <v-list-item-content>
            <v-list-item-title class="title">
              my-rent
            </v-list-item-title>
            <v-list-item-subtitle>
              חוזה שכירות
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
          >
            <v-list-item-icon>
              <v-icon >{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <div class="text-center ; btnLogOut"
             @click="logOut()"
        >
        </div>
      </v-navigation-drawer>

      <v-app-bar
        v-if="user"
        src="https://picsum.photos/1920/1080?random"
      >
        <v-app-bar-nav-icon
          @click="drawer=!drawer"
        >
        </v-app-bar-nav-icon>

        <v-app-bar-title>MY-RENT</v-app-bar-title>
      </v-app-bar>
      <div>
        <v-main>
          <v-app style="background: lightgray">
            <router-view

            ></router-view>
          </v-app>
        </v-main>
      </div>
    </v-app>
  </div>
</template>

<script>
import firebaseInstance from './middlware/firebase';

import { firebaseAuth } from './middlware/firebase';

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    user: null,
    items: [
      {
        title: 'Home',
        icon: 'fas fa-home',
        to: '/Home'
      },

      {
        title: 'about',
        icon: 'fas fa-info',
        to: '/about'
      },
      {
        title: 'New contract',
        icon: 'fas fa-file-contract',
        to: '/new-contract'
      },
      {
        title: 'Logout',
        icon: 'fas fa-sign-out-alt',
        to: '/'
      },

    ],
  }),
  methods: {
    chekUser() {
      let user = firebaseAuth.app.auth().currentUser;
      console.log(user);
    },
    logOut() {
      debugger
      let self = this;
      debugger
      firebaseInstance.firebase.auth()
        .signOut()
        .then(() => {
          window.user = null;
          this.$router.push('/');
        })
        .catch((error) => {
        });
    }

  },
  mounted() {
    this.chekUser();

  },
  created() {
    if (window.user) {
      this.user = true;
    } else {
      this.user = false;
    }
  }
};
</script>

<style scoped>

</style>
