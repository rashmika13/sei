const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/user');

// configuring Passport!
/* not currently using local strategy
passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function (email, password, done) {
      User.findOne({ email })
        .select('+password')
        .then((user) => {
          if (!user) {
            return done(null, false, { error: 'Invalid Credentials' });
          }
          user.comparePassword(req.body.pw, (err, isMatch) => {
            if (isMatch) {
              return done(null, user);
            } else {
              return done(null, false, { error: 'Invalid Credentials' });
            }
          });
        })
        .catch((err) => {
          return done(err);
        });
    }
  )
);
*/

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});
