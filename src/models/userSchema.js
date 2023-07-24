const mongosse = require('mongoose');
const userSchema = mongosse.Schema(
    {
        nameBook: {type: String , require: true},
        datep:{ type: Date },
        page: {type: Number}
    }
)

const User = mongosse.model('user', userSchema);

module.exports = User;