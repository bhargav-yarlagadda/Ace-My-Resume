import { Routes,Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import SignIn from "./auth/sign-in/Index"
import DashBoardScreen from "./screens/DashBoardScreen"

export default function App(){
  return(
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
        <Route path="/auth/sign-in" element={<SignIn/>} />
        <Route path="/dashboard" element={<DashBoardScreen/>}/>
          


      </Routes>
  )
}