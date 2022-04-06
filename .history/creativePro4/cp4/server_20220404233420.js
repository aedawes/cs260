const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// Create a scheme for items in the museum: a title and a path to an image.
const cardSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  website: String,
  address: String
});

// Create a model for items in the museum.
const card = mongoose.model('cards', cardSchema);

// connect to the database
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true
});

// Create a new card
app.post('/api/cards', async (req, res) => {
  console.log(req.body.lastName)
    const Card = new card({
      firstName: req.body.firstName,
      lastName: req.body.lastName, 
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      website: req.body.website,
      address: req.body.address
    });
    try {
      console.log(Card)
      await Card.save();
      res.send(Card);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
});

// get all of the cards
app.get('/api/cards', async (req, res) => {
    try {
      let cards = await card.find();
      console.log(cards)
      res.send(cards);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

//delete a card
app.delete("/api/cards/:id", async (req, res) => {
  try {
    await card.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//edit
app.put("/api/cards/:id", async(req, res) => {
  let item = await card.findOne({
    _id: req.params.id
  });
  try{
    Card.firstName = req.body.firstName
    Card.lastName = req.body.lastName
    await Card.save();
    res.sendStatus(200);
  } catch(error){
    console.log(error);
    res.sendStatus(500)
  }
})

app.listen(3000, () => console.log('Server listening on port 3000!'));

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test', {
//   useNewUrlParser: true
// });

// const card = mongoose.model('card', {
//   firstName: String,
//   lastName: String,
//   email: String,
//   phoneNumber: String,
//   website: String,
//   address: String
// });

// const aCard = new card({
//     firstName: 'Anais',
//     lastName: 'Dawes',
//     email: 'anais.dawes@icloud.com',
//     phoneNumber: '(123)456-7890',
//     website: 'www.site.com',
//     address: '123 Peach St, City, ST, 12345'
// });

// async function work() {
//   await aCard.save();
//   let cards = await card.find();
// }

// work();