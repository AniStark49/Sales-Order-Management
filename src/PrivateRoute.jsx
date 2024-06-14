import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
