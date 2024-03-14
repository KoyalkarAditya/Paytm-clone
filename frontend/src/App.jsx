import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import DashBoard from "./pages/DashBoard";
import SendMoney from "./pages/SendMoney";
import HomePage from "./pages/HomePage";
import UpdateInfo from "./pages/UpdateInfo";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/update" element={<UpdateInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
