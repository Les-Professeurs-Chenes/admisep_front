import './App.css'
import 'daisyui/dist/full.css'
import Home from './views/home/Home'
import Login from './views/auth/Login'

const user_logged_in = true

function App() {
  return (
    <>
     {user_logged_in ? (
        <Home />
      ) : (
        <Login/>
      )}
    </>
  )
}

export default App
