import React from 'react';
import Card from '../Components/Card';
import Input from '../Components/Input';
import Button from '../Components/Button';
import axios from 'axios';

const Login = () => {

  return (
    <div style={{ width: 'auto', margin: '0 auto' }}>
    <Card className="page">
      <h1>Sign In</h1>
      <form>
        <div>
          <label htmlFor="email" style={{ display: 'block' }}>Email</label>
          <Input name="email" style={{ display: '' }} type="text" placeholder="Email"/>
        </div>
        <div>
          <label htmlFor="password" style={{ display: 'block' }}>Password</label>
          <Input type="password" placeholder="Password"/>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>
    </Card>
    </div>
  )
}

export default Login;