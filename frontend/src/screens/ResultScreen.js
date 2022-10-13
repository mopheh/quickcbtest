import React, { useEffect } from 'react'
import '../bootstrap.min.css'
import '../styles.css'
import '../result.css'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { logout } from '../actions/userActions'

function ResultScreen() {



    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogin = useSelector( state => state.userLogin )
    const {  user } = userLogin

    const userTestSubmit = useSelector( (state) => state.userTestSubmit )
    const { score: updatedUser } = userTestSubmit

    useEffect(() => {

        if(!user){
            navigate('/')
        }

    }, [user])

    const handleClick = () => {
        dispatch(logout())
    }

  return (
    <>
        <div className="blur"></div>
        <Container className="form-div d-flex justify-content-center h-100 align-items-center">
        <Row className="w-50 bg-white align-items-center justify-content-center stats">
        <Col sm={12}>
            <h3>Result</h3>
        </Col>
        <hr />
        <Col sm={5}>
            <div className="result-head">
                <h5>Matric ID</h5>
                <h5>Course Code</h5>
                <h5>Score</h5>
                <h5>Percentage</h5>
                <h5>Grade</h5>
            </div>
        </Col>
        <Col sm={4} className="pl-0">
            { updatedUser && (
                <div className="result-head">
                <h5>{ updatedUser.matricId }</h5>
                <h5>BIO 102</h5>
                <h5>{ updatedUser.score } </h5>
                <h5>{ (updatedUser.score * 60)/60 }</h5>
                <h5>F</h5>
            </div>
            ) }
        </Col>
        <Col sm={12}>
            <Row className="justify-content-around align-items-center w-100 button mt-3">
                <Button onClick={ handleClick } variant='warning' className="logout">Logout</Button>
                <Link className="btn btn-primary" to="/scoreboard">Score Board</Link>
            </Row>
        </Col>
        </Row>
    </Container>
    </>
  )
}

export default ResultScreen