"use client";
import { createContext, useContext, useState } from "react";

const Auth = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Aditya Kumar",
        email: "aaditya1392@gmail.com",
        image: "/avatar.png",
    });
    return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
};
export const userContex = () => {
    return useContext(Auth);
};
export default ContextProvider;
