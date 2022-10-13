import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import { pickOption } from '../actions/questionActions'


function Options({ option, index, question }) {

  const dispatch = useDispatch()


  const optionPick = useSelector( state => state.optionPick )
  const {  options } = optionPick


  const handleChange =  (e) => {

    dispatch( pickOption(  question, e.target.value ) )

  }
    
  return (
        <Form.Check type="radio" 
          id={`${index}-${question}`}
          value={index}
          name={`options-${index}`}
          label={option}
          className='mr-1' 
          onChange={ handleChange }
          checked={ options[question] === index }
        />
  )
}

export default Options