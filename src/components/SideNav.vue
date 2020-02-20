<template>
  <v-navigation-drawer id="header" v-model="$store.state.drawer" absolute temporary>
    <v-list class="pa-1">
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <img src="@/assets/profile.jpg">
        </v-list-tile-avatar>

        <v-list-tile-content>
          <v-list-tile-title>Yuta Saitoh</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>

      <v-list-tile v-for="item in items" :key="item.title" :to="item.link">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { title: 'ホーム', icon: 'home', link: { name: 'about' } },
        { title: '経歴', icon: 'account_circle', link: { name: 'experience' } },
        { title: 'ブログ', icon: 'room', link: { name: 'blog' } },
        { title: '最近読んだ本一覧', icon: 'list', link: { name: 'books' } },
        { title: '連絡フォーム', icon: 'email', link: { name: 'contact' } }
      ]
    }
  }
}
</script>

<style scoped>

#header {
  z-index: 9999; 
}

</style>