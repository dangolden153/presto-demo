import React, { useState, createContext } from "react";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [token, setToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setModalMessage] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [existinguser, setExistinguser] = useState(null);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };
  return (
    <Context.Provider
      value={{
        token,
        setToken,
        isAuthenticated,
        setIsAuthenticated,
        openModal,
        setOpenModal,
        loading,
        setLoading,
        message,
        setModalMessage,
        handleRefresh,
        refresh,
        setRefresh,
        accessToken,
        setAccessToken,
        existinguser,
        setExistinguser
      }}
    >
      {children}
    </Context.Provider>
  );
};
