import { useRoutes } from 'react-router-dom';
import RouteHandler from './components/RouteHandler';
import  Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from "./pages/AddAd";
import NotFound from './pages/NotFound';

const Routes = () => {
  return useRoutes([
    {path: '/' , element: <Home /> },
    {path: '/about', element: <About /> },
    {path: '/signin', element: <SignIn /> },
    {path: '/signup', element: <SignUp /> },
    {path: '/ad/:id', element: <AdPage /> },
    {path: '/post-an-ad', element:
      <RouteHandler>
        <AddAd />
      </RouteHandler>
    },
    {path: '*', element: <NotFound /> }
  ]);
}

export default Routes;