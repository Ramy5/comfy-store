import { FormInput, SubmitButton } from "../components";
import { Link, Form, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";

export const action = (store) => {
  return async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("Logged In successfully");
      return redirect("/");
    } catch (error) {
      const err =
        error?.response?.data?.error?.message || "please check your credential";
      toast.error(err);

      return null;
    }
  };
};

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
          name="identifier"
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
