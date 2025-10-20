import { createContext, useState, useContext, useEffect } from 'react';
import { users } from '../data/mockData';

const AuthContext = createContext();

export { AuthContext };
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if user is already logged in from localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    setError('');
    // Find user in mock data
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Remove password from user object before storing
      const { password, ...userWithoutPassword } = user;
      setCurrentUser(userWithoutPassword);
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      return true;
    } else {
      setError('Invalid username or password');
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const value = {
    currentUser,
    login,
    logout,
    error,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};