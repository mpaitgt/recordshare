import React, {useState} from 'react';
import userauth from '../Utils/userauth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitUser = e => {
    e.preventDefault();
    let newUser = { name: name, email: email, password: password }
    console.log(newUser);
    userauth.userRegister(newUser);
    clearForm();
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={submitUser}>
      <input value={name} type="text" placeholder="Email" onChange={e => { setName(e.target.value) }}/>
      <input value={email} type="text" placeholder="Name" onChange={e => { setEmail(e.target.value) }}/>
      <input value={password} type="password" placeholder="Password" onChange={e => { setPassword(e.target.value) }}/>
      <button type="submit">Register</button>
    </form>
  )
}

export default Register;