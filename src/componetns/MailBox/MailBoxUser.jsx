
import css from '../MailBox/MailBoxUser.module.css'
import MailBoxList from '../MailBoxList/MailBoxList';

const MailBoxUser = ({ boxTitle,boxUsers  }) => {
   
  return (
    <div className={css.mailbox}>
      <h2 className={css.title}>{boxTitle}</h2>
     
      <MailBoxList boxUsers={boxUsers} />
    </div>
  );
};

export default MailBoxUser;
