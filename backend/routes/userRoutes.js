import express from 'express'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()


router.post('/login', asyncHandler(async (req, res) => {
  const { matricId, password } = req.body

  


  if( password === process.env.TEST_PIN ) {
    const userExists = await User.findOne({ matricId })
    if (userExists) {
      res.json({
        _id: userExists._id,
        matricId: userExists.matricId,
        score: userExists.score,
        token: generateToken(userExists._id)
    })
  }


    const user = await User.create({
        matricId,
        password,
    })
    
      if (user) {
        res.status(201).json({
        _id: user._id,
        matricId: user.matricId,
        score: user.score,
        token: generateToken(user._id),
      })
  }
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }  
}))


router.put('/:id/score', protect, asyncHandler(async (req, res) => {
  const { score } = req.body
  console.log(req.params.id)

   const user = await User.findById(req.params.id)
    
      if (user) {
        user.score = score

        const updatedUser = await user.save()
        res.json({
          _id: updatedUser._id,
          matricId: updatedUser.matricId,
          score: updatedUser.score,
          token: generateToken(updatedUser._id)
        })
  } else {
    res.status(400)
    throw new Error('User not found')
  }  
}))


export default router