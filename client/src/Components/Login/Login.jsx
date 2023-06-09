import React, { useState } from "react"
import './Login.css'

export default function
  Login() {
  const [text, setText] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1 className="loginHead">Sign In</h1>
      <form>
        <input
          type="text"
          placeholder="Username"
          value={text}
          onChange={e => setText(e.target.value)} />
        <br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
        <br></br>
      </form>
    </div>
  )
}