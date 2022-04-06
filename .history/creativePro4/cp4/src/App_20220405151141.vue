<template>
  <v-app class="mainbody">
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <h1> Build Your Own Business Card </h1>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer
      :absolute="!fixed"
      color="secondary"
      app
      dark
    >
      <span> Link to my Github: <a target="_blank" href="https://github.com/aedawes/cp3.git">aedawes</a>
      </span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  v-app-bar{
    background-color:black !important;
  }

  .mainbody{
    background-color: #A1D2CE !important;
    color: white !important;
  }

  v-footer{
    margin-top: 50px !important;
  }
</style>