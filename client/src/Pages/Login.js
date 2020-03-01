import React from 'react';
import {Link} from 'react-router-dom';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';

const Login = () => {
  return (
    <div className="page">
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
    </div>
  )
}

export default Login;