
const MailBoxForm = ({onAddUser}) => {

const handleSubmit = (event) => {
event.preventDefault()
const userEmail = event.currentTarget.elements.userEmail.value
const userName = event.currentTarget.elements.userName.value
// console.log(userEmail, userName);
const formData = {
    userEmail,
    userName,
}
onAddUser(formData)
event.currentTarget.reset()
}

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add new user</h2>
        <label>
            <span>user email</span>
            <br />
            <input type="email" name="userEmail" placeholder="email" required/>
        </label>
        <br />
        <label>
            <span>user name</span>
            <br />
            <input type="name" name="userName" placeholder="name"/>
        </label>
        <br />
        <button type="submit">new contact</button>
    </form>
  )
}

export default MailBoxForm