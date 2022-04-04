const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true
});

const card = mongoose.model('card', {
  firstName: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  website: String,
  address: String
});

const kitty = new Cat({
  name: 'Morris'
});

async function work() {
  await kitty.save();
  console.log('meow');
  let kitties = await Cat.find();
  console.log(kitties);
}

work();