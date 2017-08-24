const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, lowercase: true, required: true },
  passwordHash: { type: String, required: true }
});



userSchema.virtual('password')          //virtual field
  .get(function () { return null })
  .set(function (value) {
    const hash = bcrypt.hashSync(value, 8);
    this.passwordHash = hash;
  });

userSchema.methods.authenticate = function (password) {   //compares password entered to hashed pw in db
  return bcrypt.compareSync(password, this.passwordHash);   //method on individual user
};

userSchema.statics.authenticate = function(username, password, done) {
    this.findOne({                        //method on User constructor
        username: username
    }, function(err, user) {
        if (err) {
            done(err, false);

        } else if (user && user.authenticate(password)) {
            done(null, user);

        } else {
            done(null, false);
        }
    });
};

userSchema.statics.signup = function(username, password, done) {
    this.findOne({                        //method on User constructor
        username: username
    }, function(err, user) {
        if (err) {
            done(err, false);

        } else if(user) {
          done(null, false);

        } else {
          const newUser = new User({username: username, password: password});
          newUser.save(function(err, user){
            if(err){
              done(err, false);
            } else{
            done(null, user);
          }
          });
        }
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
