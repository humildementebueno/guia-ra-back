const mongosse = require('mongoose');
const bookSchema = mongosse.Schema(
    {
        nameBook: {type: String , require: true},
        datep:{ type: Date },
        page: {type: Number}
    }
)

const Book = mongosse.model('book', bookSchema);

module.exports = Book;