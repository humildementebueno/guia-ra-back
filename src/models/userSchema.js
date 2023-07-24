const mongosse = require('mongoose');
const userSchema = mongosse.Schema(
    {
        nameUser: {type: String , require: true},
        datep:{ type: Date },
        correo: { type: String },
        password: {type: String}
    }
)

const User = mongosse.model('user', userSchema);

module.exports = User;