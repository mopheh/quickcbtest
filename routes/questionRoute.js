import express from 'express'
import asyncHandler from 'express-async-handler'
import Question from '../models/questionsModel.js'

const router  = express.Router()

router.get('/', asyncHandler( async (req, res) => {

    const questions = await Question.find({})
    res.json(questions)

}))

export default router