import React from 'react';
import Card from '../Components/Card';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Typography from '../Components/Typography';

const Login = () => {

  return (
    <div style={{ width: 'auto', margin: '0 auto' }}>
    <Card className="page">
      <Typography variant="h2">Login</Typography>
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
      <Typography variant="p">
        Don't have an account? Make one!
      </Typography>
    </Card>
    </div>
  )
}

export default Login;