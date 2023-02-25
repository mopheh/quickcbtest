//jshint esversion:8

import dotenv from 'dotenv';
import biology from './data/biology.js';
import connectDB from './config/db.js';
import Question from './models/questionsModel.js';
import colors from 'colors';


dotenv.config();
connectDB();

const importData = async () => {
  try {
      await Question.deleteMany();

      await Question.insertMany(biology)

      console.log('Data Imported'.green.inverse);
      process.exit();

  } catch (error) {
      console.error(`${error}`);
      process.exit(1);
  }
}
;
const destroyData  = async () => {
  try {
      await Question.deleteMany();

      console.log('Data Destroyed'.red.inverse);
      process.exit();

  } catch (error) {
      console.error(`${error}`);
      process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
