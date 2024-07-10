import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      <SignUp />
    </div>
 
  )
}

export default App


   // <>
    //   <button className="btn">Button</button>
    //   <button className="btn btn-neutral">Neutral</button>
    //   <button className="btn btn-primary">Primary</button>
    //   <button className="btn btn-secondary">Secondary</button>
    //   <button className="btn btn-accent">Accent</button>
    //   <button className="btn btn-ghost">Ghost</button>
    //   <button className="btn btn-link">Link</button>
    // </>