import { useState } from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navigation from './components/shared/navigation/Navigation';
import Authenticate from './pages/authenticate/Authenticate';
import Activate from './pages/activate/Activate';

function App() {
  const [count, setCount] = useState(0);
  const isAuth = false;
  const user = {
    activated: false,
  };

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<ProtectedHomeRoute isAuth={isAuth} user={user}><Home /></ProtectedHomeRoute>} />
          <Route path='/authenticate' element={<GuestRoute isAuth={isAuth}><Authenticate /></GuestRoute>} />
          <Route path='/activate' element={<SemiProtectedRoute isAuth={isAuth} user={user}><Activate /></SemiProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const GuestRoute = ({ isAuth, children }) => {
  return isAuth ? <Navigate to="/rooms" /> : children;
};

const SemiProtectedRoute = ({ isAuth, user, children }) => {
  if (!isAuth) {
    return <Navigate to="/" />;
  }
  if (isAuth && user.activated) {
    return <Navigate to="/rooms" />;
  }
  return children;
};

const ProtectedHomeRoute = ({ isAuth, user, children }) => {
  return isAuth && user.activated ? <Navigate to="/rooms" /> : children;
};

export default App;