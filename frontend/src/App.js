import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Register from "./components/Register.jsx";
import FAQ from "./components/FAQ.jsx";
import Settings from "./components/Settings.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
 
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

        <Route
          path="/FAQ"
          element={
            <>
              <Navbar />
              <FAQ />
            </>
          }
        />

        <Route
          path="/settings/:id"
          element={
            <>
             <Navbar />
              <Settings />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );  
}
 
export default App;