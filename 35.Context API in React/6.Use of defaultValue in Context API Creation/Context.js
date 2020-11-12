import React from "react";
const MyContext = React.createContext("I Am Default Text");
export const Provider = MyContext.Provider;
export const Consumer = MyContext.Consumer;
