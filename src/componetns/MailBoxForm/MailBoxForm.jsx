

const MailBoxForm = () => {
  return (
    <form>
        <h2>Add new user</h2>
        <label>
            <span>user email</span>
            <br />
            <input type="email" placeholder="email"/>
        </label>
        <br />
        <label>
            <span>user name</span>
            <br />
            <input type="name" placeholder="name"/>
        </label>
        <br />
        <button type="submit">new contact</button>
    </form>
  )
}

export default MailBoxForm