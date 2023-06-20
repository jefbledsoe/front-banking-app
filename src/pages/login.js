import React, { useEffect, useState } from "react";
import { UserContext } from "../utils/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Login page component
function Login() {
  // context
  const { accounts } = useContext(UserContext); //correct
  const { setActiveAccount } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const { setIsLoggedIn } = useContext(UserContext);
  const { setCurrentPath} = useContext(UserContext);

  // navigate
  const navigate = useNavigate();

  // local state
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [attempts, setAttempts] = React.useState(1);
  const [isFound, setIsFound] = React.useState(false);

  useEffect(() => {
    setCurrentPath("/login/");
  }, []);

  function checkUser() { //checks if email and password are valid
    
    console.log("attempts", attempts);
    if (attempts < 3) { //checks login attempts
      window.event.preventDefault();
      setAttempts(attempts + 1);
    } else {
      window.event.preventDefault();
      alert("Too many attempts, redirecting to create an account");
      navigate("/createaccount/");
      return;
    }
    if (!email || !password) { //checks if email and password are entered
      window.event.preventDefault();
      alert("Please enter a valid email and password");
      return;
    }

    //checks if email and password match
    for (let i = 0; i < accounts.length; i++) {
      for (let j = 0; j < accounts[i].authorizedUsers.length; j++) {
        if (
          accounts[i].authorizedUsers[j].email === email &&
          accounts[i].authorizedUsers[j].password === password
        ) {
          window.event.preventDefault();
          setIsLoggedIn(true);
          setIsFound(true);
          setActiveAccount(accounts[i]);
          setUser(accounts[i].authorizedUsers[j]);
          navigate("/maketransactions/");
          return;
        }
      }
    }
    if (!isFound) {
      alert("Login Failed");
    }
  }

  return (
    <div className="container">
      <div className="card p-2">
        <form>
          <div className="mb-3">
            <label htmlFor="InputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail1"
              aria-describedby="emailHelp"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="InputPassword1"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <button type="submit" className="btn btn-success" onClick={checkUser}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
