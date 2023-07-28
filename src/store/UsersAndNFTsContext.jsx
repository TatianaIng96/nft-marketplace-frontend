import { createContext, useState } from "react";

export const UsersAndNFTsContext = createContext();

export const UsersAndNFTsProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [fakeData, setFakeData] = useState([]);

  console.log(users, fakeData);

  return (
    <UsersAndNFTsContext.Provider
      value={{
        users,
        fakeData,
        setUsers,
        setFakeData,
      }}
      >
      { children }
    </UsersAndNFTsContext.Provider>
  );
};
