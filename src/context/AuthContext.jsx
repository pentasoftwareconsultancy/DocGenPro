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
    // ✅ Load user from localStorage OR sessionStorage
    const storedUser =
      localStorage.getItem('currentUser') ||
      sessionStorage.getItem('currentUser');

    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // ✅ Added rememberMe parameter
  const login = (username, password, rememberMe = false) => {
    setError('');
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      const { password, ...userWithoutPassword } = user;
      setCurrentUser(userWithoutPassword);

      // ✅ Store user based on rememberMe
      if (rememberMe) {
        localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      } else {
        sessionStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
      }

      return true;
    } else {
      setError('Invalid username or password');
      return false;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
  };

  const value = { currentUser, login, logout, error, loading };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
