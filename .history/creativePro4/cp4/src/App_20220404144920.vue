<template>
  <v-app class="mainbody">
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <div class="d-flex align-center">
        <h1> Build Your Own Business Card </h1>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
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
    background-color: #A1D2CE;
  }
</style>