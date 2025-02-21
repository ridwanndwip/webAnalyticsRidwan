import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_self">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_self">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <a href="https://marlboro.id" target="_self">
          <button> Click to Marlboro.id</button>
          </a>
        </p><p>
          <a href="https://djisamsoe.id" target="_self">
          <button> Click to DSS.id</button>
          </a>
        </p><p>
          <a href="https://amild.id" target="_self">
          <button> Click to Amild.id</button>
          </a>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
