const mongoose = require('mongoose');


const robotSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  avatar: {},
  company: {},
  job: {},
  university: {},
  skills: [
    {}
  ],
  address: {
    city: {},
    country: {}
  },
  email: {},
  phone: {}
});

const Robot = mongoose.model('Robot', robotSchema);

module.exports = Robot;







// const Robot = {
//   showBots: function(callback) {
//     let db = require('../mongoutils').db;
//     db.collection('robots').find().toArray(callback);
//     console.log(db.collection('robots'));
//   }
//
//
// };
//
// module.exports = Robot;
