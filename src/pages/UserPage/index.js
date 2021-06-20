import { useEffect } from "react";
import { useServices } from "../../Providers/Services";
import { motion } from "framer-motion";
import CheckList from "../../components/NewList";

const UserPage = () => {
  const { user, getUser, setTodos, todos } = useServices();

  useEffect(() => {
    getUser().then((resp) => setTodos(resp));
  }, [todos]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ margin: "3%" }}
    >
      <CheckList list={todos} user={user} />
    </motion.div>
  );
};

export default UserPage;
