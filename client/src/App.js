import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import { AuthProvider } from './context/auth'
import { NotificationProvider } from './context/notification'

import UnauthenticatedRoute from './util/UnauthenticatedRoute'
import AuthenticatedRoute from './util/AuthenticatedRoute'

import Home from './views/Home/Home'
import AllPosts from './views/AllPosts/AllPosts'
import Login from './views/Login'
import Register from './views/Register'
import Navbar from './components/Navbar/Navbar'
import PostDescription from './views/PostDescription/PostDescription'
import CreatePost from './views/CreatePost'
import User from './views/User/User'
import Notification from './components/Notification/Notification'

import 'semantic-ui-css/semantic.min.css'
import './App.css'

const App = () => {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <Navbar />
          <Notification />
          <Route exact path='/' component={Home} />
          <Route exact path='/posts' component={AllPosts} />
          <Container>
            <UnauthenticatedRoute exact path='/login' component={Login} />
            <UnauthenticatedRoute exact path='/register' component={Register} />
            <AuthenticatedRoute exact path='/create-post' component={CreatePost} />
            <Route path='/post/:id' component={PostDescription} />
            <Route path='/user/:username' component={User} />
          </Container>
        </Router>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App
