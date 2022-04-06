<template>
  <div class="main">
      <div class="behind"></div>
      <v-row justify="center" align="center">
          <v-col width="700" cols="10" sm="8" md="6">
              <div class="grid-container">
                  <div class="grid">
                      <div class="item" v-for="item in cards" :key="item.firstName">
                        <v-card elevation="5" class="card">
                            <v-list-item>
                                <v-list-item-avatar size="200" color="grey"> 
                                    <p id="logo" >{{item.firstName}}{{item.lastName}}</p>
                                </v-list-item-avatar>
                                <v-list-item-content class="inside">
                                    <v-list-item-title>
                                        <h1 class="title">{{item.firstName}} {{item.lastName}}</h1>
                                    </v-list-item-title>
                                    <p> {{item.address}} </p>
                                    <p> Email: {{item.email}} </p>
                                    <p> Phone: {{item.phoneNumber}} </p>
                                    <p> Website: {{ item.website }} </p>
                                    <v-btn @click="deleteCard(item)">Delete</v-btn>
                                    <v-btn @click="clicked=!clicked">Edit</v-btn>
                                </v-list-item-content>
                                <!-- <v-card v-show="clicked" dark elevation="5" class="card">
                                        <v-card-title justify="center" class="title">
                                            <h1>Fill Out Your Card</h1>
                                        </v-card-title>
                                        <v-card-text justify="center">
                                            <label> First Name </label>
                                            <v-text-field v-model="form.firstName" label="firstname" required />
                                            <label> Last Name </label>
                                            <v-text-field v-model="form.lastName" label="lastname" required />
                                            <label> Email </label>
                                            <v-text-field v-model="form.email" label="email@foo.com" required />
                                            <label> Phone </label>
                                            <v-text-field v-model="form.phoneNumber" label="(123)456-7890" required />
                                            <label> Website </label>
                                            <v-text-field v-model="form.website" label="www.example.com" required />
                                            <label> Address </label>
                                            <v-text-field v-model="form.address" label="123 Peach St" required />
                                            <v-btn class="button" @click="clicked=!clicked, updateForm(item)">Submit</v-btn>
                                        </v-card-text>
                                </v-card> -->
                            </v-list-item>
                            <v-list-item v-show="clicked" dark elecation="5" class="card" id="editCard">
                                <v-list-item-avatar size="200" color="grey"> 
                                    <p id="logo" >{{item.firstName}}{{item.lastName}}</p>
                                </v-list-item-avatar>
                                <v-list-item-content class="inside">
                                    <v-text-field class="input" v-model="form.firstName" label="firstname"/> <v-text-field class="input" v-model="form.lastName" label="lastname"/>
                                    <v-text-field class="input" v-model="form.address" label="123 Peach St"/>
                                    <v-text-field class="input" v-model="form.email" label="email@foo.com" required />
                                    <v-text-field class="input" v-model="form.phoneNumber" label="(123)456-7890" required />
                                    <v-text-field class="input" v-model="form.website" label="www.example.com" required />
                                    <v-btn @click="clicked=!clicked, deleteCard(item)">Delete</v-btn>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card>
                    </div>
                  </div>
                </div>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'cards-list',
  data () {
    return {
        findCard: null,
        clicked: false,
        cards: [],
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
  created() {
    this.getCards();
  },
  methods: {
    async getCards() {
      try {
        let response = await axios.get("/api/cards");
        this.cards = response.data;
        console.log(this.cards)
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCard(card) {
        try {
          this.findCard = card;
          await axios.delete("/api/cards/" + card._id);
          this.findCard = null;
          window.location.reload();
          return true;
        } catch (error) {
          console.log(error);
        }
    },
  }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Montserrat:wght@200;300;400&family=Quicksand:wght@300;400&display=swap');
    .grid-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 600px;
    }

    .grid{
        width: 600px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .item{
        width: 700px;
        height: 400px;
        margin-bottom: 50px;
    }

    #editCard{
        top: -50px;
        left: 18px;
    }

  .card{
    position: absolute;
    padding: 50px;
    margin-top: 50px;
    background-color: white;
    border-radius: 25px;
    color: black;
    align-items: center;
  }

    .v-list-item__content {
        height: 250px;
        width: 300px;
    }

  .title {
      font-size: 40px !important;
      margin-bottom: 20px;
      color: black;
      padding-left: 20px;
  }

  #circle {
      border-radius: 50%;
      height: 200px;
      width: 200px;
      background-color: gray;
  }

    .inside {
        color: black;
    }

    .inside p {
        padding-left: 20px;
    }

  #logo {
      font-family: 'Dancing Script', cursive;
      color: white;
      margin-top: 25px;
      font-size: 75px;
      text-align: center;
  }

    #button {
        top: 0px;
        left: 250px;
        height: 75px;
        margin-bottom: 20px;
    }

    .v-text-field{
      width: 100px;
      height: 5px;
      font-text: 10px;
}
</style>