import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/activate/Activate';
 
import Rooms from './pages/Roomss/Rooms';
function App() {
  const isAuth = false;
  const user = {
        activated: true,
  }
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<GuestRoute isAuth={isAuth}><Home /></GuestRoute>} />
                <Route path="/authenticate" element={<GuestRoute><Authenticate /></GuestRoute>} />
                <Route path="/activate" element={<SemiProtectedRoute isAuth={isAuth} user={user}><Activate /></SemiProtectedRoute>} />
                <Route path="/rooms" element={<ProtectedRoute isAuth={isAuth} user={user}><Rooms /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
}

const GuestRoute = ({ children,isAuth }) => {
     
    return isAuth ? <Navigate to="/rooms" /> : children;
};

const SemiProtectedRoute = ({ children,isAuth,user }) => {
     
    if (!isAuth) {
        return <Navigate to="/" />;
    }
    if (isAuth && !user.activated) {
        return children;
    }
    return <Navigate to="/rooms" />;
};

const ProtectedRoute = ({ children,isAuth ,user}) => {
    
    if (!isAuth) {
        return <Navigate to="/" />;
    }
    if (isAuth && !user.activated) {
        return <Navigate to="/activate" />;
    }
    return children;
};

export default App;