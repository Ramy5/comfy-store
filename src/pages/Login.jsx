import { FormInput, SubmitButton } from "../components";
import { Link, Form } from "react-router-dom";

const Login = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="POST"
        className="p-6 space-y-4 shadow-lg card glass bg-base-100 w-96"
      >
        <h4 className="text-3xl font-bold text-center text-primary">Login</h4>
        <FormInput
          type="email"
          defaultValue="test@test.com"
          label="Email"
          name="identifiers"
        />
        <FormInput
          type="password"
          defaultValue="secret"
          label="Password"
          name="password"
        />

        <div className="w-full">
          <SubmitButton text="Login" />
        </div>

        <button className="btn btn-secondary btn-block">Guest mode</button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to="/Register"
            className="ml-2 capitalize link link-hover link-primary"
          >
            register
          </Link>{" "}
        </p>
      </Form>
    </section>
  );
};

export default Login;
