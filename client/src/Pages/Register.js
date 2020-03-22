import React, {useEffect} from 'react';
import RegistrationForm from '../Components/Registration/RegistrationForm';


const Register = () => {

  useEffect(() => {
    let thing = document.getElementById('test2');
    thing.classList.add('in');
    setTimeout(() => { thing.classList.remove('in') }, 1500);
    return () => {
      thing.classList.add('out');
      setTimeout(() => { thing.classList.remove('out') }, 1500);
    }
  }, [])

  return (
    <div style={{ width: 'auto', margin: '0 auto', textAlign: 'center', position: 'relative' }} id="test2">
      <RegistrationForm />
    </div>
  )
}

export default Register;