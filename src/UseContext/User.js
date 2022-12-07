import { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function User() {
  const { username } = useContext(AppContext);  

  return <div>User: {username}</div>;
}

export default User;
