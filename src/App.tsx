
import { Routes, Route } from "react-router-dom";


import HomeScreen from "./screens/HomeScreen";
import DashBoardScreen from "./screens/DashBoardScreen";
import UserSignIn from "./auth/sign-in/Index";
import Layout from "./components/Layout"; // Adjust the path as needed

export default function App() {


  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth/sign-in" element={<UserSignIn />} />
        <Route path="/dashboard" element={<DashBoardScreen />} />
      </Routes>
    </Layout>
  );
}
