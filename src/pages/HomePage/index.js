import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useServices } from "../../Providers/Services";
import { motion } from "framer-motion";
import CardHome from "../../components/CardUsers";

const HomePage = () => {
  const [list, setList] = useState(["", ""]);
  const history = useHistory();
  const { user, setUser, setUsername, getUsers } = useServices();

  useEffect(() => {
    getUsers().then((resp) => setList(resp));
  }, [user, getUsers]);

  const handleUser = (id, name) => {
    setUser(id);
    setUsername(name);
    history.push("/user");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardHome list={list} handleUser={handleUser} />
    </motion.div>
  );
};

export default HomePage;
