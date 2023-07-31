// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../pages/Home';
import SignUpForm from '../pages/SignUpForm';
import LogInForm from '../pages/LogInForm';
import CreateNFTForm from '../pages/CreateNFTForm';
import Profile from '../pages/Profile';
import Explore from '../pages/Explore';
import ProductDetails from '../pages/ProductDetails';
import EditPersonalInformation from '../pages/EditPersonalInformation';
import OurCollection from '../pages/OurCollection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/sign-up',
        element: <SignUpForm />,
      },
      {
        path: '/login',
        element: <LogInForm />,
      },
      {
        path: '/create-nft',
        element: <CreateNFTForm />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
      {
        path: '/product-details',
        element: <ProductDetails />,
      },
      {
        path: '/edit-personal-info',
        element: <EditPersonalInformation />,
      },
      {
        path: 'our-collection',
        element: <OurCollection />,
      },
    ],
  },
]);

export default router;
