import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Correct import
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import LoginForm from './components/LoginForm';
import OrdersPage from './pages/OrdersPage';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('chakra-ui-color-mode');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/orders" element={<PrivateRoute><OrdersPage /></PrivateRoute>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <ThemeToggle />
    </AuthProvider>
  );
};

export default App;
