<template>
  <v-app light class="mainbody">
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="secondary"
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      color="secondary"
      app
    >
      <span> Link to my Github: <a target="_blank" href="https://github.com/aedawes/cp3.git">aedawes</a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Build Your Own Business Card',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Build Your Own Business Card'
    }
  }
}
</script>

<style scoped>
  .mainbody{
    background-color: #A1D2CE !important;
    color: white !important;
  }

</style>