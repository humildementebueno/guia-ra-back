const mongosse = require('mongoose');
const unidAdmisSchema = mongosse.Schema(
    {
        nameComment: { type: String , require: true },
        location:{ type: String, type: String },
        description:{ type: String },
        score: {type: Number},
        datec:{ type: Date },
    }
)

const UnidAdmi = mongosse.model('unidAdmi', unidAdmisSchema);

module.exports = UnidAdmi;