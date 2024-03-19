import AuthForm from "./components/AuthForm/AuthForm.jsx";
import {Route, Routes} from "react-router-dom";
import RegForm from "./components/RegForm/RegForm.jsx";
import PasswrdRecoveryForm from "./components/PasswrdRecoveryForm/PasswrdRecoveryForm.jsx";
import PasswrdChangeForm from "./components/PasswrdChangeForm/PasswrdChangeForm.jsx";

function App() {
  return (
    <Routes>
        <Route path='/auth' element={
            <AuthForm />
        } />
        <Route path='/reg' element={
            <RegForm />
        } />
        <Route path='/recover' element={
            <PasswrdRecoveryForm />
        } />
        <Route path='/change' element={
            <PasswrdChangeForm />
        } />
    </Routes>
  )
}

export default App
