import css from "./MailBoxListItem.module.css";

const MailBoxListItem = ({ user, onDeletUser }) => {
  return (
    <li>
      <p >Email:  {user.userEmail}</p>
      <p className={css.name}>Name: <div style={{backgroundColor: user.favColor}} className={css.color} /> <b>{user.userName}</b></p>

      <button
        className={css.btn}
        type="button"
        onClick={() => onDeletUser(user.id)}
      >
        Delete user
      </button>
    </li>
  );
};

export default MailBoxListItem;
