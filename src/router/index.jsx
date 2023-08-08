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
import ChangePassword from '../pages/ChangePassword';
import EditProfileImage from '../pages/EditProfileImage';
import Ranking from '../pages/Ranking';

import AdminCreateUser from '../pages/AdminCreateUser';
import AdminEditUser from '../pages/AdminEditUser';

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
        path: '/our-collection',
        element: <OurCollection />,
      },
      {
        path: '/change-password',
        element: <ChangePassword />,
      },
      {
        path: '/edit-profile-image',
        element: <EditProfileImage />,
      },
      {
        path: '/ranking',
        element: <Ranking />,
      },
      {
        path: '/admin-create-user',
        element: <AdminCreateUser />,
      },
      {
        path: '/admin-edit-user',
        element: <AdminEditUser />,
      },
    ],
  },
]);

export default router;
