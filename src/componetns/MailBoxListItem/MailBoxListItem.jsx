const MailBoxListItem = ({ user, onDeletUser }) => {
  return (
    <li>
      <p>Email: {user.userEmail}</p>
      <p>Name: {user.userName}</p>
      <button type="button" onClick={() => onDeletUser(user.id)}>Delete user</button>
    </li>
  );
};

export default MailBoxListItem;
