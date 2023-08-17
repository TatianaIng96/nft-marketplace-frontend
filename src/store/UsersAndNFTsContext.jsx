/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-else-return */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';
import { useJwt } from 'react-jwt';

export const UsersAndNFTsContext = createContext();

export const UsersAndNFTsProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [fakeData, setFakeData] = useState([]);

  const [loggedUser, setLoggedUser] = useState({
    token: '',
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  });

  const { role, token } = loggedUser;

  let isAdmin = false;
  if (role === 'ADMIN') { isAdmin = true; }

  const { decodedToken } = useJwt(token);

  // console.log(decodeToken());

  return (
    <UsersAndNFTsContext.Provider
      value={{
        users,
        fakeData,
        loggedUser,
        isAdmin,
        decodedToken,
        setUsers,
        setFakeData,
        setLoggedUser,
      }}
    >
      {children}
    </UsersAndNFTsContext.Provider>
  );
};
