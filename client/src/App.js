import React from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Navbar from './components/Navbar/Navbar'
import PostDescription from './views/PostDescription'

import 'semantic-ui-css/semantic.min.css'
import './App.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Container>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route path='/post/:id' component={PostDescription} />
      </Container>
    </Router>
  )
}

export default App;
