import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {isOdd} from '@lib/library';
import {SomeComponent} from '@lib/theme'

const ToError = () => {
    // @ts-ignore
    exit(0)
    // @ts-ignore
    kek.dsf.dsf = 3;
}

function App() {
  const [count, setCount] = useState(0)
  if (count){
      return null
  }
  return (
    <div className="App">
        <SomeComponent>123</SomeComponent>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React!!</h1>
        <div>{isOdd(count).toString()}</div>
        <h1 onClick={ToError}>Все сломать!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
