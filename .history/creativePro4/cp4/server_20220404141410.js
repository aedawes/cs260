const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// Create a scheme for items in the museum: a title and a path to an image.
const card = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  website: String,
  address: String
});

// Create a model for items in the museum.
const Item = mongoose.model('Item', itemSchema);
// connect to the database
mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});

// Upload a photo. Uses the multer middleware for the upload and then returns
// the path where the photo is stored in the file system.
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/items', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    description: req.body.description, 
    path: req.body.path,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//delete
app.delete("/api/items/:id", async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//edit
app.put("/api/items/:id", async(req, res) => {
  let item = await Item.findOne({
    _id: req.params.id
  });
  try{
    item.title = req.body.title
    item.description = req.body.description
    await item.save();
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