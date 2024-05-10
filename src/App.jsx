
import { useState } from 'react';
import './App.css'
import MailBoxUser from './componetns/MailBox/MailBoxUser';
import MeetExspressUser from './componetns/MailBox/meestExpress.json'


function App() {

  const [users, setUsers] = useState(MeetExspressUser)
  const onAddUser = (formData) => {
  const finalUser = {
    ...formData,
    
  } 

  }

  return (
    <div>
   <MailBoxUser boxUsers={users} boxTitle='Meest Express' />
    </div>
  );
}

export default App
