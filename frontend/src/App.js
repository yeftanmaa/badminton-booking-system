import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Register from "./components/Register.jsx";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <Dashboard />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );  
}
 
export default App;