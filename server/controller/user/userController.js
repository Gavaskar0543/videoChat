const User = require('../../modals/userData');
module.exports.signup = async function(req,res){
 const user = User.find({email:req.body.email});
if(req.body.password != req.body.confirmPassword){
    
    console.log('password not match');
    return;
}
if(!user){
    const newUser = await User.create(req.body);
    console.log('user created',newUser);
    return;
}
else{
    console.log('user already registered',user);
    return;
}
}