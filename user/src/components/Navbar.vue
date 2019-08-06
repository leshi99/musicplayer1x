<template>
<nav>
  <v-toolbar fixed class="grey darken-1">
    <v-toolbar-title>
      <span class="home"
        @click="navigateTo({name: 'HomePage'})">
        <v-avatar class="mr-2" size="37">
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/f3/72/da/f372daff-24ba-09ee-3edd-13eadb27c9e0/source/512x512bb.jpg" alt="avatar">
        </v-avatar>
        <span class="font-weight-light">Music</span><span class="font-weight-medium">Player</span><span class="font-weight-bold">X</span>
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat class="hidden-sm-and-down"
      @click="navigateTo({name: 'AboutUs'})">
        About Us
      </v-btn>
      <v-btn flat class="hidden-sm-and-down"
      @click="navigateTo({name: 'Contact'})">
        Contact
      </v-btn>
      <v-btn flat class="hidden-sm-and-down"
      @click="navigateTo({name: 'UserPolicy'})">
        User Policy
      </v-btn>
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer">
      </v-toolbar-side-icon>
    </v-toolbar-items>
  </v-toolbar>
  <v-navigation-drawer
  v-model="drawer"
  app
  right
  temporary
  class="grey lighten">
    <v-list>
      <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
        <v-list-tile-action>
          <v-icon>{{ link.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ link.text }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</nav>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  data () {
    return {
      drawer: false,
      links: [
        {icon: 'home', text: 'Home', route: '/'},
        {icon: 'info', text: 'About Us', route: '/AboutUs'},
        {icon: 'description', text: 'User Policy', route: '/UserPolicy'},
        {icon: 'account_circle', text: 'Contact', route: '/Contact'}
      ]
    }
  }
}
</script>
<style scoped>
.home{
  cursor: pointer;
}
</style>
