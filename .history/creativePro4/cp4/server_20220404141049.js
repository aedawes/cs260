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

const aCard = new card({
    firstName: 'Anais',
    lastName: 'Dawes',
    email: 'anais.dawes@icloud.com',
    phoneNumber: '(123)456-7890',
    website: 'www.site.com',
    address: '123 Peach St, City, ST, 12345'
});

async function work() {
  await aCard.save();
  let cards = await card.find();
}

work();