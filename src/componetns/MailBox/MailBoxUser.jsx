import css from "../MailBox/MailBoxUser.module.css";
import MailBoxListItem from "../MailBoxListItem/MailBoxListItem";

const MailBoxUser = ({ boxTitle, boxUsers }) => {
  return (
    <div className={css.mailbox}>
      <h2 className={css.title}>{boxTitle}</h2>
      <ul>
        {Array.isArray(boxUsers) &&
          boxUsers.map((user) => {
            return <MailBoxListItem user={user} key={user.id} />;
          })}
      </ul>
    </div>
  );
};

export default MailBoxUser;
