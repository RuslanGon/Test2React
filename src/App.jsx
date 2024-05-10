import { useState } from "react";
import "./App.css";
import MailBoxUser from "./componetns/MailBox/MailBoxUser";
import MeetExspressUser from "./componetns/MailBox/meestExpress.json";
import { nanoid } from "nanoid";
import MailBoxForm from "./componetns/MailBoxForm/MailBoxForm";

function App() {
  const [users, setUsers] = useState(MeetExspressUser);

  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    // setUsers([...users, finalUser])
    setUsers((prevState) => [...prevState, finalUser]);
  };

  const onDeletUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <MailBoxForm onAddUser={onAddUser} />
      <MailBoxUser
        boxUsers={users}
        boxTitle="Meest Express"
        onDeletUser={onDeletUser}
      />
    </div>
  );
}

export default App;
