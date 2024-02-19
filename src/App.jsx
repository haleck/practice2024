import { useState } from 'react'
import AuthForm from "./components/AuthForm/AuthForm.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthForm />
    </>
  )
}

export default App
