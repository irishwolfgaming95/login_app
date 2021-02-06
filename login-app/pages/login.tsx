import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  Username: string;
  Password: string;
}

export default function Login() {
  return (
    <Formik
      initialValues={{
        Username: "",
        Password: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      <Form>
        <label htmlFor="userName">Username</label>
        <Field id="userName" name="userName" placeholder="John123" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" placeholder="******" />

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
