// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import PrivateRoute from '../Components/PrivateRoute';
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
import ListNftAdmin from '../pages/ListNftAdmin';
import Ranking from '../pages/Ranking';
import AdminCreateUser from '../pages/AdminCreateUser';
import AdminEditUser from '../pages/AdminEditUser';
import NotFound from '../pages/NotFound';
import MyProfile from '../pages/MyProfile';
import Payments from '../pages/Payments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
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
        path: '/profile/:id',
        element: <Profile />,
      },
      {
        path: '/my-profile/',
        element: <MyProfile />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
      {
        path: '/product-details/:id',
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
        path: '/payments/:id',
        element: <Payments />,
      },
      {
        path: '/edit-profile-image',
        element: <EditProfileImage />,
      },
      {
        path: '/list-nft-admin',
        element:
          // eslint-disable-next-line react/jsx-indent
          <PrivateRoute>
            <ListNftAdmin />
          </PrivateRoute>,
      },
      {
        path: '/ranking',
        element:
          // eslint-disable-next-line react/jsx-indent
          <PrivateRoute>
            <Ranking />
          </PrivateRoute>,
      },
      {
        path: '/admin-create-user',
        element:
          // eslint-disable-next-line react/jsx-indent
          <PrivateRoute>
            <AdminCreateUser />
          </PrivateRoute>,
      },
      {
        path: '/admin-edit-user/:id',
        element:
          // eslint-disable-next-line react/jsx-indent
          <PrivateRoute>
            <AdminEditUser />
          </PrivateRoute>,
      },
    ],
  },
]);

export default router;
