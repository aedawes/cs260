<template>
  <div class="main">
      <div class="behind"></div>
      <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6">
              <v-card dark elevation="5" class="card">
                  <v-card-title justify="center" class="title">
                      <h1>Fill Out Your Card</h1>
                  </v-card-title>
                  <v-card-text justify="center">
                    <label> First Name </label>
                    <v-text-field v-model="form.firstname" label="firstname" required />
                    <label> Last Name </label>
                    <v-text-field v-model="form.lastname" label="lastname" required />
                    <label> Email </label>
                    <v-text-field v-model="form.email" label="email@foo.com" required />
                    <label> Phone </label>
                    <v-text-field v-model="form.phonenumber" label="(123)456-7890" required />
                    <label> Website </label>
                    <v-text-field v-model="form.website" label="www.example.com" required />
                    <label> Address </label>
                    <v-text-field v-model="form.address" label="123 Peach St" required />
                    <v-btn class="button" @click="updateForm()">Submit</v-btn>
                  </v-card-text>
              </v-card>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'IndexPage',
  data () {
    return {
      form: {
          firstname: '',
          lastname: '',
          email: '',
          phonenumber: '',
          website: '',
          address: ''
      }
    }
  },
  methods:{
    async updateForm() {
      try {
        let r2 = await axios.post('/api/cards', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phonenumber: this.phonenumber,
          website: this.website,
          address: this.address
        });
        this.addItem = r2.data;
      } catch (error) {
        alert("Form did not submit")
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>

  .card{
    top: 150px;
    margin-bottom: 228px;
    padding: 50px;
    background-color: #50858B;
  }

  .title {
      margin-bottom: 20px;
  }
</style>