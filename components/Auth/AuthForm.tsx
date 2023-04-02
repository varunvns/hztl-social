import { useState, useRef, useContext } from "react";
import classes from "./AuthForm.module.css";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import NotificationContext from "@/store/notification-context";

async function createUser(email: string, password: string) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
  return data;
}

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const notificationContext = useContext(NotificationContext);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    console.log("Inside submit");
    if (isLogin) {
      const result = await signIn("credentials", {
        redirect: false,
        email: emailRef.current!.value,
        password: passwordRef.current!.value,
      });
      console.log(result);
      if (!result!.error) {
        router.replace("/profile");
      }
    } else {
      try {
        notificationContext.showNotification({
          title: "Signing up",
          message: "Registering for HZTL Social...",
          status: "pending",
        });
        const resp = await createUser(
          emailRef.current!.value,
          passwordRef.current!.value
        );
        console.log(resp);
        notificationContext.showNotification({
          title: "Registered Successfully",
          message: resp.message,
          status: "success",
        });
        setIsLogin((prevState) => !prevState);
      } catch (error: any) {
        console.log(error);
        notificationContext.showNotification({
          title: "Error while Registration",
          message: error.message,
          status: "success",
        });
      }
    }
  }

  return (
    <section className="ftco-section ftco-no-pb ftco-no-pt">
      <div className="container">
        <div className="row">
          <div className="col-md-7"></div>
          <div className="col-md-5">
            <div className="login-wrap p-4 p-md-5">
              <h1>
                {isLogin ? "Login to HZTL Social" : "Register to HZTL Social"}
              </h1>
              <form className="signup-form" onSubmit={submitHandler}>
                <div className="form-group">
                  <label className="label" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    placeholder="johndoe@gmail.com"
                    required
                    ref={emailRef}
                  />
                </div>
                <div className="form-group">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    ref={passwordRef}
                  />
                </div>
                <div className={classes.actions}>
                  <button>{isLogin ? "Sign In" : "Register Now"}</button>
                  <button
                    type="button"
                    className={classes.toggle}
                    onClick={switchAuthModeHandler}
                  >
                    {isLogin
                      ? "Register to Hztl Social"
                      : "Already have an account? Sign In"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
