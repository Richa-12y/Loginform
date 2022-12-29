import React, { useEffect, useState } from "react";
import "./login.css";
import UserData from "./user.json";
import AuthData from "./auth.json";

const Login = () => {
  const [email, setEmail] = useState(null); //this is for email filed
  const [psw, setPsw] = useState(null); //this is for password filed
  const [isLogined, setIsLogined] = useState(false); //this is for check user is login or not
  const [userid, setUserid] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  console.log(email);
  console.log(psw);
  const handleClick = (e) => {
    e.preventDefault();
    // console.log("hello");

    let fetchData = AuthData.filter((el) => el.email === email); //it will filter the email and it will also check that is is equal or not
    console.log(fetchData);
    if (fetchData.length !== 0) {
      //   alert("correct email id");
      if (fetchData[0].password === psw) {
        //it will check the passowrd given by user and alraedy exits in auth.json file
        setIsLogined(true);
        setUserid(fetchData[0].id); //here we set the userid
      } else {
        alert("your password is invalid");
      }
    } else {
      alert("Invalid Email id");
    }
  };
  //   here useEffect started

  useEffect(() => {
    let data = UserData.filter((el) => el.id === userid);
    setUserDetails(data);
  }, [userid]);
  console.log(userDetails);
  return (
    <>
      {!isLogined ? (
        <div>
          <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
          </div>
          <form>
            <h3>Login Here</h3>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Email"
                id="username"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                onChange={(e) => setPsw(e.target.value)}
                value={psw}
              />
              <button onClick={handleClick}>Login</button>
              <div className="social">
                <div className="go">
                  <i className="fab fa-google" /> Google
                </div>
                <div className="fb">
                  <i className="fab fa-facebook" /> Facebook
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div>User details it will be display here</div>
      )}
    </>
  );
};

export default Login;
