import { useEffect, useState } from "react";
import { useServices } from "../../Providers/Services";
import { motion } from "framer-motion";
import CheckList from "../../components/NewList";

const UserPage = () => {
  const [list, setList] = useState(["", ""]);
  const { user, getUser } = useServices();

  useEffect(() => {
    getUser().then((resp) => setList(resp));
  }, [user, getUser]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{ margin: "3%" }}
    >
      <CheckList list={list} user={user} />
    </motion.div>
  );
};

export default UserPage;
