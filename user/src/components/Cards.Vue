<template>
  <v-card flat>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md6 lg4 v-for="feature in items" :key="feature.feature">
          <v-card flat class="ma-3">
            <v-card-text class="text-xs-center">
              <div class="headline">{{ feature.feature }}</div>
            </v-card-text>
            <v-img :src="feature.avatar" max-width="800" max-height="550"></v-img>
            <!-- this means from xs size up make all text centralised margin  -->
            <v-card-text class="title text-xs-left">
              <div class="text--grey darken-2">{{ feature.description }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      { feature: 'Listening Experience',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione libero numquam, perspiciatis ex accusantium, quasi omnis ab voluptas sed quae fugit iusto mollitia voluptates labore! Doloremque iste temporibus fugiat vitae!',
        avatar: 'https://www.intellectdigest.in/wp-content/uploads/2017/06/5-Best-Music-Player-Apps-for-Android-Smartphone-580x550.png' },
      { feature: 'Usability and Versatility',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione libero numquam, perspiciatis ex accusantium, quasi omnis ab voluptas sed quae fugit iusto mollitia voluptates labore! Doloremque iste temporibus fugiat vitae!',
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/f3/72/da/f372daff-24ba-09ee-3edd-13eadb27c9e0/source/512x512bb.jpg' },
      { feature: 'Audio Enhancement',
        description: 'Ellie Goulding',
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/f3/72/da/f372daff-24ba-09ee-3edd-13eadb27c9e0/source/512x512bb.jpg' },
      { feature: 'Visual Effects', description: 'Ellie Goulding', avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/f3/72/da/f372daff-24ba-09ee-3edd-13eadb27c9e0/source/512x512bb.jpg' },
      { feature: 'Skins', description: 'Ellie Goulding', avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/f3/72/da/f372daff-24ba-09ee-3edd-13eadb27c9e0/source/512x512bb.jpg' }
    ]
  })
}
</script>
<style scoped>
.v-card>:last-child:not(.v-btn):not(.v-chip) {
  background-color: #303030;
}
.v-card__text {
  background-color: #212121;
  color: #bfbfbf;
}
</style>
