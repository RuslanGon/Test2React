
import { useState } from 'react';
import './App.css'
import MailBoxUser from './componetns/MailBox/MailBoxUser';
import MeetExspressUser from './componetns/MailBox/meestExpress.json'
import { nanoid } from 'nanoid';
import MailBoxForm from './componetns/MailBoxForm/MailBoxForm';


function App() {

  const [users, setUsers] = useState(MeetExspressUser)

  const onAddUser = (formData) => {
  const finalUser = {
    ...formData,
    id: nanoid()
  } 
  // setUsers([...users, finalUser])
  setUsers((prevState) => [...prevState, finalUser])
  }

  return (
    <div>
      <MailBoxForm />
   <MailBoxUser boxUsers={users} boxTitle='Meest Express' />
    </div>
  );
}

export default App
