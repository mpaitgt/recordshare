import React, {useState} from 'react';
import {Path, Card, Button, Input, Text, Container} from '../Components/Elements';
import API from '../Utils';
import styled from '@emotion/styled';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  
  const onSubmit = e => {
    e.preventDefault();
    API.userauth.userLogin({ email: email, password: password })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          API.userauth.populateLocalStorage(data);
          // might have to change this to a more React appropriate action
          window.location.replace('/dashboard');
        } else {
          setMessage(data.msg);
        }
      })
      .catch(err => setMessage(err));
  }

  return (
    <Container>
      <Card>
        <Text variant="h2">Login</Text>
          { message.length > 0 ? <Text variant="p2">{message}</Text> : null }
          <form key="form1" onSubmit={onSubmit}>
            <Text variant="label-block" htmlFor="email">Email</Text>
            <Input name="email" type="text" placeholder="your email" onChange={e => setEmail(e.target.value)} value={email} />
            <Text variant="label-block" htmlFor="password">Password</Text>
            <Input type="password" placeholder="your password" onChange={e => setPassword(e.target.value)} value={password} />
            <div>
              <Button display="block">Login</Button>
            </div>
          </form>
          <Text variant="p2">
            <Path to="/forgot-password">
              Forget your password? 
            </Path>
          </Text>
          <Text variant="p2">
            Don't have an account?<br/>
            <Path to="/signup">Make one!</Path>
          </Text>
      </Card>
    </Container>
  )
}

export default Login;