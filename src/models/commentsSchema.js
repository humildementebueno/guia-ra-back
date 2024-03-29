const mongosse = require('mongoose');
const commentSchema = mongosse.Schema(
    {
        nameComment: { type: String , require: true },
        location:{ type: String, type: String },
        description:{ type: String },
        score: {type: Number},
        datec:{ type: Date },
    }
)

const Comment = mongosse.model('comment', commentSchema);

module.exports = Comment;