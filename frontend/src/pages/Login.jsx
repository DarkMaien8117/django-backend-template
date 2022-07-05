import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import api from '../api'

const Body = styled.div`
  text-align:center;
  align-items:center;
`
const Field = styled.input`
  margin:0 auto;
  width:50%;
`
const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const Login = async () => {
    try {
      const result = await api.account.findAccount(username, password)
      console.log('Login Response result : ', result.data)
    } catch (err) {
      console.log('error : ', err)
    }
  }

  return (
    <Body>
      <h1> Login </h1>
      <h4>UserName</h4>
      <Field onChange={(e) => { setUserName(e.target.value) }} />
      <h4>Password</h4>
      <Field type="password" onChange={(e) => { setPassword(e.target.value) }} />

      <div style={{ marginBottom: '20px' }} /><br />
      <button style={{ marginRight: '20px' }} onClick={Login}>Login</button><br />

      Did you <Link to="/signup">SignUp</Link>?
    </Body>
  )
}

export default Login
