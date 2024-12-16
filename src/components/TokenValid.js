import * as jwtDecode from 'jwt-decode'; // Import the entire module
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useTokenValidation = () => {
  const navigate = useNavigate();

  // Helper function to check if the token is expired
  const isTokenExpired = (token) => {
    try {
      const decodedToken = jwtDecode.default(token); // Use .default if the library exports it as default
      return decodedToken.exp * 1000 < Date.now(); // `exp` is in seconds
    } catch (error) {
      return true; // Treat any decoding error as token expiration
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get the token from localStorage

    if (!token || isTokenExpired(token)) {
      localStorage.removeItem('token'); // Clear invalid token from localStorage
      navigate('/login'); 
    }
  }, [navigate]);
};

export default useTokenValidation;
