import React ,{useEffect}from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../auth.js';

const ProtectedRoute = ({ element: Component }) => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
    } })
  return isAuthenticated() ? <Component /> : <Navigate to="/Login" />;
};
export default ProtectedRoute;