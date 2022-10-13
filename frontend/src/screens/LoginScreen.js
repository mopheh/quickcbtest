import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import '../bootstrap.min.css'
import '../styles.css'
import '../register.css'
import { Form, Button, Col, Row } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

function LoginScreen() {


    
    const [ loginDetails, setLoginDetails ] = useState({ 
        matricId:'',
        password:''
     })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogin = useSelector( state => state.userLogin )
    const { loading, user, error } = userLogin


    useEffect(() => {


        if(user) {
            navigate('/test')
        }

        
    }, [user])



    const handleSubmit = (e) => {


        e.preventDefault()
        dispatch( login(loginDetails) )



    }

    const handleChange = (e) => {
        
        const { name, value } = e.target
        setLoginDetails(prevLogin => ({
            ...prevLogin,
            [name]: value
        }))

    }


  return (
    <>
        <div className='blur'></div>
        <FormContainer>
        <Form className='form-body' onSubmit={ handleSubmit }>
            { error && <Message variant='danger'>{error}</Message> }
            <h2 className='text-center'>WELCOME</h2>
            <Row className='align-items-end'>
                    <Col sm={11} className='mb-3 pr-2'>
                <Form.Group controlId='matricId'>
                        <Form.Label>Matric ID</Form.Label>
                        <Form.Control
                            type='text'
                            name='matricId'
                            value={ loginDetails.matricId }
                            className='rounded'
                            placeholder='Enter Matric Number'
                            autoComplete='off'
                            onChange={ handleChange }
                        ></Form.Control>
                        <small id="matricHelp" className="form-text text-muted font-small">We'll never share your number with anyone else.</small>
                </Form.Group>
                    </Col>
                <Col sm={8} className='mb-0 pr-2'>
                    <Form.Group controlId='password'>
                        <Form.Label>Test Pin</Form.Label>
                        <Form.Control
                            type='password'
                            value={ loginDetails.password }
                            name='password'
                            className='rounded'
                            placeholder='Enter Test Pin'
                            onChange={ handleChange }
                            autoComplete="new-password"
                        ></Form.Control>
                    </Form.Group>
                </Col>
                <Col sm={4} className='pt-2 pl-2'>
                    { loading ? <Loader /> : <Button type='submit' variant='primary'>
                        Take Test
                    </Button> }
                </Col>
            </Row>
        </Form>
        </FormContainer>

    </>

  )
}

export default LoginScreen