import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import Home from './Views/Home'
import Login from './Views/Login'
import Register from './Views/Register'
import Navbar from './Components/Navbar'

import 'semantic-ui-css/semantic.min.css'
import './App.css'

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </Container>
    </Router>
  );
}

export default App;
