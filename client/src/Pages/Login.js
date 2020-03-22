import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Card from '../Components/Card';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Text from '../Components/Text';

const Login = () => {

  useEffect(() => {
    let thing = document.getElementById('test');
    thing.classList.add('in');
    setTimeout(() => { thing.classList.remove('in') }, 1500);
  }, [])

  return (
    <div id="test" style={{ width: 'auto', margin: '0 auto', textAlign: 'center' }}>
    <Card className="page">
      <Text variant="h3">Login</Text>
      <form>
        <div>
          <Text variant="label" htmlFor="email">Email</Text>
          <Input name="email" type="text" placeholder="jondoe@example.com"/>
        </div>
        <div>
          <Text variant="label" htmlFor="password" style={{ display: 'block' }}>Password</Text>
          <Input type="password" placeholder="poopisbrown123"/>
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
  )
}

export default Login;