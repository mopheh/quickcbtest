import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import ResultScreen from './screens/ResultScreen'
import TestScreen from './screens/TestScreen'
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/test' element={ <TestScreen /> } exact></Route>
          <Route path='/' element={ <LoginScreen /> } />
          <Route path='/result' element={ <ResultScreen /> } exact/>
        </Routes>
      </main>
    </Router>
  )
}

export default App