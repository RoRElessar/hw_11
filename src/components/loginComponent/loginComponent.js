import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './loginComponent.scss'

class LoginComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      login: true
    }
  }

  registerForm = e => {
    this.setState({ login: !this.state.login })
    e.preventDefault()
  }

  logIn = e => {
    alert('Is logged in') // TODO remove later, it is for test purposes
    e.preventDefault()
  }

  register = e => {
    alert('Is registered') // TODO remove later, it is for test purposes
    e.preventDefault()
  }

  render () {
    const logIn = this.state.login
    let form

    if (logIn) {
      form = (
        <Form>
          <h3>Log in</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary"
                  type="submit"
                  onClick={ this.logIn }>
            Log in
          </Button>
          <Button variant='outline-dark'
                  className='float-right'
                  onClick={ this.registerForm }>
            Register
          </Button>
        </Form>
      )
    } else {
      form = (
        <Form>
          <h3>Register</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button variant="primary"
                  type="submit"
                  onClick={ this.register }>
            Register
          </Button>
          <Button variant='outline-dark'
                  className='float-right'
                  onClick={ this.registerForm }>
            Log in
          </Button>
        </Form>
      )
    }

    return (
      <div className='login-page'>
        { form }
      </div>
    )
  }
}

export default LoginComponent
