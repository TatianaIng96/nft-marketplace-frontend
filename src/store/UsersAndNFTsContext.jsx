/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

export const UsersAndNFTsContext = createContext();

export const UsersAndNFTsProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [fakeData, setFakeData] = useState([]);
<<<<<<< HEAD
  const [isAdmin, setIsAdmin] = useState(false);
=======
  const [isAdmin, setIsAdmin] = useState(true);
>>>>>>> fix-details

  // console.log(users);

  return (
    <UsersAndNFTsContext.Provider
      value={{
        users,
        fakeData,
        isAdmin,
        setUsers,
        setFakeData,
      }}
    >
      {children}
    </UsersAndNFTsContext.Provider>
  );
};
