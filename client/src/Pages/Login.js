import React from 'react';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import userauth from '../Utils/userauth';

const Login = () => {
  return (
    <div>
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
      <a href="/auth/google">Google+</a>
    </div>
  )
}

export default Login;