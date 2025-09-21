import React, { useState } from 'react'
import "./LoginSignup.css"
import email from '../../assets/email.png'
import password from '../../assets/password.png'
import person from '../../assets/person.png'
import logo from '../../assets/logo.png'
const LoginSignup = () => {
  const [action, setAction] = useState('Sign up')
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userEmail, userPassword, userName);
    setUserName('');
    setUserEmail('');
    setUserPassword('');
  }
  return (
    <div className='login-container'>
      <img src={logo} alt="logo" className='logo-img'/>
      <form className="login-box" onSubmit={handleSubmit}>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ?
            <>
              <div className="input">
                <img src={email} alt="user" />
                <input type="email" placeholder='Email ID' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
              </div>
              <div className="input">
                <img src={password} alt="user" />
                <input type="password" placeholder='Password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required/>
              </div>
            </> :
            <>
              <div className="input">
                <img src={person} alt="user" />
                <input type="text" placeholder='Name' value={userName} onChange={(e) => setUserName(e.target.value)} required/>
              </div>
              <div className="input">
                <img src={email} alt="user" />
                <input type="email" placeholder='Email ID' value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required/>
              </div>
              <div className="input">
                <img src={password} alt="user" />
                <input type="password" placeholder='Password' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} required/>
              </div>
            </>
          }
        </div>
        <div className="forgot-password">
          {action === "Login" ?
            <>
              Forgot Password? <span> Click here</span>
            </> : ""
          }
        </div>
        <div className="submit-container">
          <button value="submit" className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign up") }}>Sign up</button>
          <button value="submit" className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginSignup


