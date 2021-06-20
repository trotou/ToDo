import { createContext, useContext, useState } from "react";
import API from "../../services";

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [done, setDone] = useState(false);
  const [todos, setTodos] = useState(["", ""]);

  const todoRegister = async (data) => {
    try {
      API.post("/todos", data).then(alert("created"));

      return true;
    } catch (error) {
      console.log("Não registrado", error);

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
        user,
        setUser,
        username,
        setUsername,
        todoRegister,
        done,
        setDone,
        getUser,
        getUsers,
        todos,
        setTodos,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
