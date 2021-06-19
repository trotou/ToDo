import { createContext, useContext, useState } from "react";

const ServicesContext = createContext();

export const ServicesProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [lat, setLat] = useState('')
    const [lgn, setLgn] = useState('')

    const handleOpen =() => {
        setOpen(true)
    }

  return (
    <ServicesContext.Provider value={{ open, setOpen, lat, setLat, lgn, setLgn , handleOpen}}>
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => useContext(ServicesContext);
