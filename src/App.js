import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Placedetails from "./components/Placedetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/forgot" element={<ForgotPassword />} />
          <Route exact path="/placedetails/:id" element={<Placedetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
