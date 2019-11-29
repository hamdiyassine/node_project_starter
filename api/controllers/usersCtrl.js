const User  = require('../models/User');


/* --------------------------- SIGN UP ---------------------------------- */
exports.signup = (req, res, next)=>{
  User.findOne({email: req.body.email}).exec().then(doc=>{
    if(doc !== null) return res.status(409).json({msg: "email already exist"});
    req.body['is_admin']    = false;
    const usr = new User(req.body);
    usr.avatar = '';
    usr.save().then(rslt=>{
       res.status(201).json(rslt);
    }).catch(err=>{ res.status(500).json({err: err}); });

  }).catch(err=>{ res.status(500).json({err: err}); })
}


