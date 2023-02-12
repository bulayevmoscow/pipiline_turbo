import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {isOdd} from '@lib/library';
import {SomeComponent} from '@lib/theme'
import {HelloWorld} from "@common/HelloWorld";
import {loadEnv} from "vite";



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <HelloWorld/>
        <SomeComponent>123</SomeComponent>
    </div>
  )
}

export default App
