import React, { useState, createContext } from "react";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [token, setToken] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setModalMessage] = useState("");
  const [notifyMessage, setNotifyMessage] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [notification, setNotification] = useState(false);
  const [isViewed, setIsViewed] = useState("pending");
  const [existinguser, setExistinguser] = useState(null);
  const [cardPictures, setCardPictures] = useState([]);
  const [onboarding, setOnboarding] = useState(null);

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
        setExistinguser,
        cardPictures,
        setCardPictures,
        notification,
        setNotification,
        notifyMessage,
        setNotifyMessage,
        isViewed,
        setIsViewed,
        onboarding,
        setOnboarding,
      }}
    >
      {children}
    </Context.Provider>
  );
};
