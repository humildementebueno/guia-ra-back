const mongosse = require('mongoose');
const commentSchema = mongosse.Schema(
    {
        nameComment: {type: String , require: true},
        datec:{ type: Date },
        score: {type: Number},
        comment:{type: String}
    }
)

const Comment = mongosse.model('comment', commentSchema);

module.exports = Comment;