import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  Username: string;
  Password: string;
  email: string;
}

export default function Register() {
  return (
    <Formik
      initialValues={{
        Username: "",
        Password: "",
        email: "",
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

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="john@acme.com"
          type="email"
        />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
