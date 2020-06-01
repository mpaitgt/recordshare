import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Card from '../Components/Elements/Card';
import Input from '../Components/Elements/Input';
import Button from '../Components/Elements/Button';
import Text from '../Components/Elements/Text';
import Container from '../Components/Elements/Container';
import styled from '@emotion/styled';
import userauth from '../Utils/userauth';

const FORMWRAPPER = styled.div`
  width: auto;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const onSubmit = e => {
    e.preventDefault();
    // userauth.userLogin({ email: email, password: password });
  }

  return (
    <Container>
      <Text variant="h1">Login</Text>
      <FORMWRAPPER>
        <Card>
          <Text variant="h3">Login</Text>
            <form onSubmit={onSubmit}>
                <Text variant="label" htmlFor="email">Email</Text>
                <Input 
                  name="email" 
                  type="text" 
                  placeholder="jondoe@example.com" 
                  onChange={e => setEmail(e.target.value)} 
                  value={email} 
                />
                <Text variant="label" htmlFor="password" style={{ display: 'block' }}>Password</Text>
                <Input 
                  type="password" 
                  placeholder="poopisbrown123" 
                  onChange={e => setPassword(e.target.value)} 
                  value={password} 
                />
                <Button>Login</Button>
            </form>
            <Text variant="p1">OR</Text>
            <Button onClick={() => userauth.googleLogin()}>Login with Google</Button>
            <Button>Login with Facebook</Button>
            <Text variant="p1">
              Forget your password? 
            </Text>
            <Text variant="p1">
              Don't have an account? <Link to="/signup">Make one!</Link>
            </Text>
        </Card>
      </FORMWRAPPER>
    </Container>
  )
}

export default Login;