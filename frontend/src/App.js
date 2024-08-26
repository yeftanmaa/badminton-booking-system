import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Register from "./components/Register.jsx";
import FAQ from "./components/FAQ.jsx";
import Settings from "./components/Settings.jsx";
import Payment from "./components/Payment.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx"; // Import the PrivateRoute component
import '@fortawesome/fontawesome-free/css/all.min.css';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute
              element={
                <>
                  <Navbar />
                  <Dashboard />
                </>
              }
            />
          }
        />

        <Route
          path="/FAQ"
          element={
            <PrivateRoute
              element={
                <>
                  <Navbar />
                  <FAQ />
                </>
              }
            />
          }
        />

        <Route
          path="/payment-method"
          element={
            <PrivateRoute
              element={
                <>
                  <Navbar />
                  <Payment />
                </>
              }
            />
          }
        />

        <Route
          path="/settings/:id"
          element={
            <PrivateRoute
              element={
                <>
                  <Navbar />
                  <Settings />
                </>
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
