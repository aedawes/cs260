<template>
  <div class="main">
      <div class="behind"></div>
      <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6">
              <v-card dark elevation="5" class="card">
                  <v-card-title justify="center" class="title">
                      <h1> Create Your Own Business Card </h1>
                  </v-card-title>
                  <v-card-text justify="center">
                    <h2> Welcome, {{ form.yourname }} </h2>
                    <v-text-field v-model="form.yourname" class="input" label="Enter your name" required />
                    <v-btn class="button" @click="goToIndex()"> Get Started </v-btn>
                    <v-btn class="button" @click="goToCards()"> See Cards </v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      form: {
          yourname: ''
      }
    }
  },
  methods:{
    goToIndex() {
      this.$router.push('/form')
    },
    goToCards() {
      this.$router.push('/cards')
    }
  }
}
</script>

<style scoped>
  *{
    text-align: center;
  }

  .title {
    text-align: center;
    padding: 50px;
    word-break: normal;
  }

  .card{
    top: 150px;
    padding: 50px;
    background-color: #50858B;
  }
</style>