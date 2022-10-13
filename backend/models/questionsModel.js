
import mongoose from 'mongoose';


const questionSchema = mongoose.Schema({
  question: String,
  options: Array,
  answer: Number,
  score: {
    type: Number,
    default: 0
  }
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
