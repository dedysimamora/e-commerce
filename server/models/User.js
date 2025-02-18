const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type : String,
        required : true,
    },
    last_name: {
        type : String,
        required : true,
    },
    avatar : {
        type : String,
        required : true,
    },
    phoneNumber : {
        type : String,
        required : true,
    },
    money : {
        type : Number,
    },
    role : {
        type : String,
    },
    address : {
        type : String,
        required : true,
    },
    email: {
        type: String,
        validate: [{
            validator: function (input) {
                let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return input.match(mailformat)
            },
            message: props => `${props.value} invalid email`
        }, {
            validator: function (input) {
                return mongoose.model('User', userSchema)
                    .findOne({ _id: { $ne: this._id }, email: input })
                    .then(data => { if (data) return false })
            },
            message: 'Email is already registered!'
        
        }]
    },
    password: String
},{ timestamps : true});

userSchema.pre('save', function(next){
   let salt = bcrypt.genSaltSync(10);
   let hash = bcrypt.hashSync(this.password, salt);
    this.password = hash
    next()
})

let User = mongoose.model('User', userSchema);

module.exports = User