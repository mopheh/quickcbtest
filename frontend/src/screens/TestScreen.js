import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import Options from '../components/Options'
import '../bootstrap.min.css'
import '../styles.css'
import { listQuestions, numberQuestions } from '../actions/questionActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function TestScreen() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const questionList = useSelector( (state) => state.questionList )
    const { loading, questions, error } = questionList

    const questionNumber = useSelector( (state) => state.questionNumber )
    const { loading: loadingNumber, question, error: errorNumber } = questionNumber

    const optionPick = useSelector( (state) => state.optionPick )
    const { options } = optionPick
    
    const userLogin = useSelector( state => state.userLogin )
    const {  user } = userLogin


    useEffect(() => {

      dispatch( listQuestions() )
      dispatch( numberQuestions(0) )

      if( !user ) {
        navigate('/')
      }

      
    }, [dispatch, user])
    
    const answeredQuestions = Object.keys(options)

    const handlePrevButton = () => { 
        dispatch( numberQuestions ( question - 1 )); 
    }
    const handleNextButton = () => { 
        dispatch( numberQuestions ( question + 1 )); 
    
    }
  return (
    <>
        <div className='blur'></div>
        <Header />
        <Container className='subjects mt-5'>
            <div className='subjects-nav'>
                <div id='biology'>
                    BIO 102
                </div>
            </div>
            <Row className='quest-ans py-2'>
                { loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                    <>
                        <Col className="question my-2" sm={8}>
                        {  loadingNumber ? <Loader /> : 
                            errorNumber ? <Message variant='danger'>{errorNumber}</Message> : 
                            question >= 0 && questions.length > 0 ? questions[question]['question'] : null}
                        </Col>
                        <Col className='options' sm={8}>
                            <Form>
                                { question >= 0 && questions.length > 0 ? questions[question].options.map((option, index) => (
                                    <Options key={index} option={ option } index={index} question={ question } />
                                )) : null}

                            </Form>
                        </Col>
                    </>
                )}
            </Row>
            { !error && (
                    <>
                        <Row className="quest-navigator d-flex justify-content-between my-2">
                            <Button className="my-2 my-sm-0" id='prev' 
                            variant='success' disabled={ question === 0 } size='sm' onClick={ handlePrevButton }>Prev</Button>
                            <Button className="my-2 my-sm-0" id='next' 
                            variant='success' disabled={ question === (questions.length - 1) } size='sm' onClick={ handleNextButton }>Next</Button>
                        </Row>
                        <Row className='num-navigator'>
                            {  questions.map( (question, index) => 
                                (<Button key={index} onClick={ () => 
                                ( dispatch( numberQuestions ( index ))) 
                                } id={index} variant={ answeredQuestions.includes(index.toString()) ? 'success' : 'outline-success' } size='sm' className=" m-1">{index + 1}</Button>) ) }
                        </Row> 
                    </>
                )}
           
        </Container>
    </>
  )
}

export default TestScreen