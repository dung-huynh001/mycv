import { Navigate } from "react-router-dom";
import { useAuth } from "~/contexts/AuthContext/AuthContext";


type ProtectedRouteProps = {
    element: JSX.Element;
};

function ProtectedRoute({ element }: ProtectedRouteProps): JSX.Element {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? element : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
