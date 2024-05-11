import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';


const formSchema = Yup.object({
  userEmail: Yup.string().required('Enail adress must be').email('You must enter email'),
  userName: Yup.string().required('Name is reguired').max(38, 'your user neme can be 38 simbol')
});

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
      validationSchema={formSchema}
      onSubmit={handleSubmit}>
      <Form>
        <h2>Add new user</h2>
        <label>
          <span>user email</span>
          <br />
          <Field type="email" name="userEmail" placeholder="email" />
          <ErrorMessage component='p' name="userEmail" />
        </label>
        <br />
        <label>
          <span>user name</span>
          <br />
          <Field type="name" name="userName" placeholder="name" />
          <ErrorMessage component='p' name="userName" />
        </label>
        <br />
        <button type="submit">new contact</button>
      </Form>
    </Formik>
  );
};

export default MailBoxForm;
