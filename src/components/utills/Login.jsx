import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateDate } from "./Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./Firebase";
const Login = () => {
  const [isSignIn, setSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  console.log(isSignIn, "isSignIn");

  const handleSignIn = () => {
    setSignIn(!isSignIn);
  };

  // validate form data
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    let message = checkValidateDate(
      email.current.value,
      password.current.value
    );
    console.log(message);
    setErrorMessage(message);
    if (message) return; // if there is msg dont go head.
    // then we will go in sign in / signup

    if (isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user, "user");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode, errorMessage);
          setErrorMessage(errorCode, errorMessage);
        });
    }

    if (!isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, "login user");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, errorMessage);
        });
    }
  };
  return (
    <>
      <div className="login-wrapper">
        <Header />
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <div className="gap-5  flex flex-col w-4/12 bg-black/65 px-5  text-white m-auto mt-10 py-20 ">
              <h1 className="font-bold text-3xl">
                {isSignIn ? "Sign Up" : "Sign In"}
              </h1>

              {isSignIn && (
                <input
                  type="text"
                  placeholder="Enter Your name"
                  className="border-red-600 border-2 p-2 bg-gray-500 text-black  rounded"
                />
              )}
              <input
                ref={email}
                type="email"
                placeholder="Email and phone number"
                className="border-red-600 border-2 p-2 bg-gray-500 text-black  rounded"
              />

              <input
                ref={password}
                type="text"
                placeholder=" Password"
                className="border-red-600 border-2 p-2 bg-gray-500 text-black  rounded"
              />
              <p className="text-red-600">{errorMessage}</p>
              <button
                onClick={handleButtonClick}
                className="w-full bg-red-600 p-2 rounded cursor-pointer"
              >
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
