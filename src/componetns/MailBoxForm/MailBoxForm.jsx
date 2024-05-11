import { Field, Form, Formik } from "formik";

const INITIAL_VALUE = {
  userEmail: "",
  userName: "",
}

const MailBoxForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
    onAddUser(values)
    actions.resetForm()



    //   event.preventDefault();
    //   const userEmail = event.currentTarget.elements.userEmail.value;
    //   const userName = event.currentTarget.elements.userName.value;
    // console.log(userEmail, userName);
    // const formData = {
    //   userEmail,
    //   userName,
    // };
    // onAddUser(formData);
    // event.currentTarget.reset();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUE}
      onSubmit={handleSubmit}>
      <Form>
        <h2>Add new user</h2>
        <label>
          <span>user email</span>
          <br />
          <Field type="email" name="userEmail" placeholder="email" />
        </label>
        <br />
        <label>
          <span>user name</span>
          <br />
          <Field type="name" name="userName" placeholder="name" />
        </label>
        <br />
        <button type="submit">new contact</button>
      </Form>
    </Formik>
  );
};

export default MailBoxForm;
