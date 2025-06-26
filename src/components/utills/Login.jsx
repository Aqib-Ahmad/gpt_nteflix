import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const handleSignIn = () => {
    setSignIn(!isSignIn);
  };
  return (
    <>
      <div className="login-wrapper">
        <Header />
        <form>
          <div>
            <div className="gap-5  flex flex-col w-4/12 bg-black/65 px-5  text-white m-auto mt-10 py-20 ">
              <h1 className="font-bold text-3xl">
                {isSignIn ? "Sign Up" : "Sign In"}
              </h1>

              {isSignIn && (
                <input
                  type="text"
                  placeholder="Enter Your name"
                  className="border-red-600 border-2 p-2 bg-white text-black  rounded"
                />
              )}
              <input
                type="text"
                placeholder="Email and phone number"
                className="border-red-600 border-2 p-2 bg-white text-black  rounded"
              />
              <input
                type="password"
                placeholder=" Password"
                className="border-red-600 border-2 p-2 bg-white text-black rounded "
              />
              <button className="w-full bg-red-600 p-2 rounded cursor-pointer">
                {isSignIn ? "Sign Up" : "Sign In"}
              </button>
              <p className="font-bold">
                {isSignIn ? "  Alreadt registered " : " New to Netflix?"}
                <span
                  onClick={handleSignIn}
                  className="cursor-pointer hover:underline hover:bg-red-600 hover:p-1 hover:rounded "
                >
                  {isSignIn ? "Sign In . " : " Sign Up Now ."}
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
