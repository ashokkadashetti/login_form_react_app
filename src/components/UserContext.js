import React from "react";

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserReciver = UserContext.Consumer

export {UserProvider, UserReciver}