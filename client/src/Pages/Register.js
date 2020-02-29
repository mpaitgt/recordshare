import React, {useState} from 'react';
import userauth from '../Utils/userauth';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const submitUser = e => {
    e.preventDefault();
    let newUser = { name: name, email: email, password: password, password2: password2 }
    console.log(newUser);
    userauth.userRegister(newUser);
    clearForm();
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPassword2('');
  }

  return (
    <form onSubmit={submitUser} className="page">
      <div>
        <Input value={name} type="text" placeholder="Email" onChange={e => { setName(e.target.value) }}/>
      </div>
      <div>
        <Input value={email} type="text" placeholder="Name" onChange={e => { setEmail(e.target.value) }}/>
      </div>
      <div>
        <Input value={password} type="password" placeholder="Password" onChange={e => { setPassword(e.target.value) }}/>
      </div>
      <div>
        <Input value={password2} type="password" placeholder="Re-enter password" onChange={e => { setPassword2(e.target.value) }}/>
      </div>
      <Button type="submit">Register</Button>
    </form>
  )
}

export default Register;