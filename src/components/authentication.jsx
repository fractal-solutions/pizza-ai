import { createSignal, createMemo } from 'solid-js'

const [userToken, setToken] = createSignal('')
const [username, setUsername] = createSignal('')
const [password, setPassword] = createSignal('')

export default function Authentication() {
  

    return (
      <div  className = "flex items-center justify-center pt-20">
        <div role="tablist" className="tabs tabs-bordered p-4 w-4/6 max-w-screen-md mx-auto">
          <input type="radio" name="my_tabs_1" role="tab" className="tab ml-10 mb-2" aria-label="📲" />
          <div role="tabpanel" className="tab-content flex-col">
            <input type="text"id="login-username"  placeholder="Username" className="input input-bordered w-5/6 max-w-xs m-1 text-xs"  onInput={(e) => {setUsername(e.target.value)}}/>
            <input type="text" id="login-password" placeholder="Password" className="input input-bordered w-5/6 max-w-xs m-1 text-xs" onInput={(e) => {setPassword(e.target.value)}}/>
            <button className="btn btn-sm btn-success m-2 w-3/6 max-w-xs justify-center text-white" onClick={() => loginUser(username(),password())}>Login</button>
          </div>
  
          <input type="radio" name="my_tabs_1" role="tab" className="tab mb-2" aria-label="✒️" checked />
          <div role="tabpanel" className="tab-content">
            <input type="text" placeholder="Email" className="input input-bordered w-5/6 max-w-xs m-1 text-xs" />
            <input type="text" id="register-username" placeholder="Username" className="input input-bordered w-5/6 max-w-xs m-1 text-xs"  onInput={(e) => {setUsername(e.target.value)}}/>
            <input type="text" id="register-password" placeholder="Password" className="input input-bordered w-5/6 max-w-xs m-1 text-xs"  onInput={(e) => {setPassword(e.target.value)}}/>
            <button className="btn btn-sm btn-primary m-2 w-3/6 max-w-xs justify-center text-white" onClick={() => registerUser(username(),password())}>Register</button>
          </div>
  
        </div>
      </div>
  
    )
  }


  // Register a new user
async function registerUser(username, password) {
  try {
    const response = await fetch('http://localhost:3333/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    const data = await response.json()
    console.log(data.message)
    document.getElementById("register-username").value = ''
    document.getElementById("register-password").value = ''
    setUsername('')
    setPassword('')
  } catch (error) {
    console.error('Error:', error)
  }
}

// Log in a user and get a JWT
async function loginUser(username, password) {
  try {
    const response = await fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    const data = await response.json()
    const token = data.token
    document.getElementById("login-username").value = ''
    document.getElementById("login-password").value = ''
    setUsername('')
    setPassword('')
    // Store the token securely (e.g., in an HTTP-only cookie or local storage)
    if (token) console.log('Login successful. Token:', token)
    setToken(token)
    return token
  } catch (error) {
    console.error('Error:', error)
  }
}