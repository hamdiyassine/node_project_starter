const mongoose = require('mongoose');
const User = mongoose.Schema ({
  first_name: { type: String, default: "" },
  last_name : { type: String, default: "" },

  email: { type: String, default: "" },
  pass: { type: String, default: "" },

  avatar: { type: String, default: "" },

  phone: { type: String, default: "" },
  id: { type: String, default: "" },
  is_admin: { type: Boolean, default: false }
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);