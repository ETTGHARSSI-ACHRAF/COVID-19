import { useCookies } from 'react-cookie';
import { Navigate, useLocation } from 'react-router-dom';

// children is the componnet you want to render on a successful login 

const PrivateRoute = ({ children , role }) => {
    let location = useLocation();
    // const roleStorage = localStorage.getItem('role');
    const [cookies, setCookie] = useCookies();
   return cookies.role === role
   ? children
   : <Navigate to={`/`} state={{ from: location }} />;
   
};

export default PrivateRoute;