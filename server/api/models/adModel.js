const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdSchema = new Schema({
  title: {
    type: String // title
  },
  language: {
    type: String // Malay to Malay, English to Malay etc
  },
  category: {
    type: String // news, info, motivation etc
  },
  reward: {
    type: Number
  },
  requirements: {
    type: String
  },
  expiry_date: {
    type: Date
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  created_by: {
      type: Schema.Types.ObjectId
  },
  applicant: {
    _id: {
      type: Schema.Types.ObjectId,
      default: null
    }
  },
  submission: {
    date: {
      type: Date
    },
    content: {
      type: String
    }
  },
  status: {
    type: String,
    default: 'active' //active, applied, submitted, completed, expired
  }
})

mongoose.model('ad', AdSchema)
