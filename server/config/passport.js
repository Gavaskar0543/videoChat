const passport = require('passport');
const localStrategy = requie('passport-local').Strategy;
passport.use(new localStrategy(
    function(email,password,done){
       

    }
))
