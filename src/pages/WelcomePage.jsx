import React, { useState } from "react";
import UserContext from "../context/Context";
import OrderPage from "./OrderPage";

const WelcomePage = () => {
  const [user, setUser] = useState("Mat");

  const handleChangeUser = () => {
    setUser("Juan");
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        WelcomePage {user}
        <OrderPage />
      </div>
      <button onClick={handleChangeUser}>Click Me</button>
    </UserContext.Provider>
  );
};

export default WelcomePage;
