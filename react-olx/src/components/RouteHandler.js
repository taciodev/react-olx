import { Navigate } from 'react-router-dom';
import { isLogged } from '../helpers/AuthHandler';

export default ({ children }) => {
  let logged = isLogged();

  if (!logged) {
    return <Navigate to="/signin" /> 
  }
  return children
}