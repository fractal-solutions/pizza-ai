import { createSignal } from 'solid-js'
import './App.css'
import TopBar from './components/topbar'
import BottomNav from './components/bottomnav'
import Authentication from './components/authentication'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <TopBar/>
      <Authentication/>
      <BottomNav/>
    </>
  )
}


export default App
