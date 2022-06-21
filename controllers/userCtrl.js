const User = require("../models/User");

const index = (req, res) => {
  User.find({}, (err, users)=> {
      if(err){
          res.status(400).json(err)
          return
      }
      res.json(users)
  })
}

const create = (req, res) => {
  User.create(req.body, (err, u)=>{
      if(err){
          res.status(400).json(err)
          return
      }
      res.json({u, message: "Successfully Signed Up! Nice to meet you"})
  })
}


let show = (req, res) => {
  User.findById(req.params.id, (err, User) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(User);
  });
}

let update = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true} ,(err, u) =>{
      if(err){
          res.status(400).json(err)
          return
      }
      res.json(u)
  } )
}

let  deleteIt= (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, u)=>{
      if(err){
          res.status(400).json(err)
          return
      }

      res.json({message: 'Item Deleted'})
  })
}


// let userProfile = (req, res)=>{
//   User.findById(req.params.ProfileId, (err, profile) => {
//     if (err) {
//       req.flash("error", "something went wrong.")
//       res.redirect('/')
//     }
//     res.render('users/profile', {user: profile})
//   })
// }

module.exports = {
  index,
  create,
  show,
  update,
  deleteIt,
  // userProfile,
};