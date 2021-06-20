import { createContext, useContext, useState } from "react";
import API from "../../services";

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const [username, setUsername] = useState("");
  const [check, setCheck] = useState(false);
  const [done, setDone] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const todoRegister = async (data) => {
    try {
      API.post("/todos", data).then(alert("created"));

      return true;
    } catch (error) {
      console.log("Doens't not registered", error);

      return false;
    }
  };

  const getUser = async () => {
    try {
      const response = await API.get(`/users/${user}/todos`);

      return response.data;
    } catch (error) {
      console.log("Não trouxe usuário: ", error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await API.get("/users/");

      return response.data;
    } catch (error) {
      console.log("Não trouxe usuário: ", error);
    }
  };

  return (
    <ServicesContext.Provider
      value={{
        open,
        setOpen,
        handleOpen,
        user,
        setUser,
        username,
        setUsername,
        check,
        setCheck,
        todoRegister,
        done,
        setDone,
        getUser,
        getUsers,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
