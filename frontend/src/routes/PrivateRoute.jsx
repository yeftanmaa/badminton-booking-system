import { Navigate } from "react-router-dom";

function PrivateRoute({ element: Element }) {
    const isAuthenticated = localStorage.getItem("authToken");
    return isAuthenticated ? Element : <Navigate to="/" />;
}

export default PrivateRoute;