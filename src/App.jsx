import { useState } from 'react'
import './App.css'
import Dashboard from './pages/dashboard'
import Login from './pages/login'

function App() {
  const [loginStatus, setLoginStatus] = useState(false)

  return (
    <div className='bg-slate-50'>
      {loginStatus ?
        <Dashboard /> :
        <Login setLoginStatus={setLoginStatus} />
      }
    </div>
  )
}

export default App
