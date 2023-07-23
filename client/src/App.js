import {useState} from 'react'
import './App.css';

function App() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  return (
   <>
   <h1>Register</h1>
   <form>
    <input 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    type='text'
    placeholder='Name'
    />
    <input 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    type='email'
    placeholder='Eamil'
    />
    <input 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
    type='password'
    placeholder='password'
    />
    <br/>
    <input type='submit' value='register'/>
   </form>
   </>
  );
}

export default App;
