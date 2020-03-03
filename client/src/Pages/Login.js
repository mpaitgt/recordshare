import React from 'react';
import Card from '../Components/Card/Card';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import axios from 'axios';

const Login = () => {
  let config = {
    headers: {'Access-Control-Allow-Origin': '*'}
  };

  return (
    <div style={{ width: 'auto', margin: '0 auto' }}>
    <Card className="page">
      <h1>Sign In</h1>
      <form>
        <div>
          <Input style={{ display: 'block' }} type="text" placeholder="Email"/>
        </div>
        <div>
          <Input style={{ display: 'block' }} type="password" placeholder="Password"/>
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>
      <button onClick={() => { axios.get('/auth/google', config) }}>Sign in with Google</button>
    </Card>
    </div>
  )
}

export default Login;