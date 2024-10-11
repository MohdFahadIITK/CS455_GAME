import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userName, setUserName] = useState(null);

  const loadTokenFromStorage = () => {
    const storedToken = localStorage.getItem('token');
    const storedUserName = localStorage.getItem('userName');
    if (storedToken && storedUserName) {
      setToken(storedToken);
      setUserName(storedUserName);
    }
  };

  useEffect(() => {
    loadTokenFromStorage();
  }, []);

  const signIn = (newToken, userName) => {
    setToken(newToken);
    setUserName(userName);
    localStorage.setItem('token', newToken);
    localStorage.setItem('userName', userName);
  };

  const signOut = () => {
    setToken(null);
    setUserName(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
  };

  return (
    <AuthContext.Provider value={{ token, userName, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
