

import './App.css'
import MailBoxUser from './componetns/MailBox/MailBoxUser';
// import DrinksCounter from './componetns/DrinksCounter/DrinksCounter'
// import DrinksValue from './componetns/DrinksValue/DrinksValue'
// import MailBoxUser from './componetns/MailBox/MailBoxUser'
import MeetExspressUser from './componetns/MailBox/meestExpress.json'
// import NovaPoshtasUser from './componetns/MailBox/novaPoshta.json'
// import UkrPoshtaUser from './componetns/MailBox/ukrPoshta.json'

function App() {
  

  return (
    <div>
   <MailBoxUser boxUsers={MeetExspressUser} boxTitle='Meest Express' />
    </div>
  );
}

export default App
