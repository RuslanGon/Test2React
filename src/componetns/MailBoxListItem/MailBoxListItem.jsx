

const MailBoxListItem = ({user}) => {
  return (
    
    <li>
      <p>Email: {user.userEmail}</p>
      <p>Name: {user.userName}</p>

    </li>
   
    
  )
}


export default MailBoxListItem


