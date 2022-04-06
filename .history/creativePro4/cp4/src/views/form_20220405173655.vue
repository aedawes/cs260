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
                    <v-text-field v-model="form.firstName" label="First Name" required />
                    <label> Last Name </label>
                    <v-text-field v-model="form.lastName" label="Last Name" required />
                    <label> Email </label>
                    <v-text-field v-model="form.email" label="Email" required />
                    <label> Phone </label>
                    <v-text-field v-model="form.phoneNumber" label="Phone Number" required />
                    <label> Website </label>
                    <v-text-field v-model="form.website" label="Website" required />
                    <label> Address </label>
                    <v-text-field v-model="form.address" label="Address" required />
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
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          website: '',
          address: ''
      }
    }
  },
  methods:{
    async updateForm() {
      try {
        console.log("here: " + this.form.lastName)
        let r2 = await axios.post('/api/cards', {
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          email: this.form.email,
          phoneNumber: this.form.phoneNumber,
          website: this.form.website,
          address: this.form.address
        });
        this.addItem = r2.data;
        console.log(r2)
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