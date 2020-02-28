import React from 'react';
import userauth from '../../Utils/userauth';
import {TextField, Button} from '../Reusable/FormElements';

const Login = () => {
  return (
    <div>
      <form>
        <TextField type="text" placeholder="Email"/>
        <TextField type="password" placeholder="Password"/>
        <Button>Login</Button>
      </form>
      <a href="/auth/google">Google+</a>
    </div>
  )
}

export default Login;