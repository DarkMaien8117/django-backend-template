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
const Signup = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirmPassword] = useState('')

  const Signup = async () => {
    if (password === confirm) {
      try {
        const result = await api.account.addAccount(username, password)
        console.log('Signup Response result : ', result.data)
      } catch (err) {
        console.log('error : ', err)
      }
    }
    else
      alert('Input password correctly!')
  }

  return (
    <Body>
      <h1> Sign Up </h1>
      <h4>UserName</h4>
      <Field onChange={(e) => { setUserName(e.target.value) }} />
      <h4>Password</h4>
      <Field type="password" onChange={(e) => { setPassword(e.target.value) }} />
      <h4>Confirm Password</h4>
      <Field type="password" onChange={(e) => { setConfirmPassword(e.target.value) }} />
      <div style={{ marginBottom: '20px' }} /><br />
      <button style={{ marginRight: '20px' }} onClick={Signup}>Sign Up</button>
      <Link to="/login">Login</Link>
    </Body>
  )
}

export default Signup
