import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Card from '../Components/Card';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Text from '../Components/Text';
import Transition from '../Components/Transition';
import userauth from '../Utils/userauth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onSubmit = e => {
    e.preventDefault();
    const creds = { email, password };
    console.log(creds);
    userauth.userLogin(creds);
  }

  return (
    <Transition>
    <div style={{ width: 'auto', margin: '0 auto', textAlign: 'center' }}>
    <Card className="page">
      <Text variant="h3">Login</Text>
      <form onSubmit={onSubmit}>
        <div>
          <Text variant="label" htmlFor="email">Email</Text>
          <Input 
            name="email" 
            type="text" 
            placeholder="jondoe@example.com" 
            onChange={e => setEmail(e.target.value)} 
            value={email} 
          />
        </div>
        <div>
          <Text variant="label" htmlFor="password" style={{ display: 'block' }}>Password</Text>
          <Input 
            type="password" 
            placeholder="poopisbrown123" 
            onChange={e => setPassword(e.target.value)} 
            value={password} 
          />
        </div>
        <div>
          <Button>Login</Button>
        </div>
      </form>
      <div style={{ margin: '20px 0px' }}>
        <Text variant="p1">
          Forget your password? 
        </Text>
      </div>
      <div style={{ margin: '20px 0px' }}>
        <Text variant="p1">
          Don't have an account? <Link to="/register">Make one!</Link>
        </Text>
      </div>
    </Card>
    </div>
    </Transition>
  )
}

export default Login;