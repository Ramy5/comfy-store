import { Form, Link } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";

const Register = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="p-6 space-y-4 shadow-lg bg-base-100 card glass w-96"
      >
        <h4 className="text-3xl font-bold text-center text-primary">
          Register
        </h4>
        <FormInput type="text" name="username" label={"username"} />
        <FormInput type="email" name="email" label={"email"} />
        <FormInput type="password" name="password" label={"password"} />

        <div>
          <SubmitButton text={"register"} />
        </div>

        <p className="text-center">
          Already a member
          <Link
            to={"/login"}
            className="ml-2 capitalize link link-hover link-primary"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
