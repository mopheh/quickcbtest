import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import Timer from './Timer'
import {  submitUserTest } from '../actions/userActions'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const questionList = useSelector( (state) => state.questionList )
  const { questions} = questionList

  const optionPick = useSelector( (state) => state.optionPick )
  const { options } = optionPick

  const userTestSubmit = useSelector( (state) => state.userTestSubmit )
    const { success } = userTestSubmit


  useEffect(() => {
    if (success) {
      navigate('/result')
    }
  }, [success])
  
  

  const handleClick = () => {

    if (window.confirm('Are You Sure?')) {

      var score = 0
      // eslint-disable-next-line
      questions.map((question, index) => {
        if (options) {
          if(question.answer === options[index]){
            score ++
          }
        }
      })
      dispatch(submitUserTest(score))
      


    }

  }

  return (
    <header>
    <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <Navbar.Brand>QuickTest</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
                 <Nav.Item className="justify-content-between time-status">
                    <Timer initialMinute={45} initialSeconds={0} />
              <Button variant='danger' className=" my-2 ml-1 my-sm-0 submit" type="submit" onClick={ handleClick }>End Exam</Button>
            </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
