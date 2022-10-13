import React from 'react'
import { Container } from 'react-bootstrap'

function FormContainer({ children }) {
  return (
    <Container className='form-div d-flex justify-content-center h-100 align-items-center'>
        { children }
    </Container>
  )
}

export default FormContainer