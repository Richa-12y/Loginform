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
  const [userDataBase, setUserDataBase] = useState([]);
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

  const handleClickAdmin = (e) => {
    setUserDataBase(UserData);
  };
  //   here useEffect started

  useEffect(() => {
    let data = UserData.filter((el) => el.id === userid);
    setUserDetails(data);
  }, [userid]);
  console.log(userDetails);
  // const { name, website, username, phone } = userDetails[0];

  console.log(userDataBase);
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
        <>
          <div className="admin-container">
            {userDetails.length !== 0 ? (
              <div className="user-container">
                <div className="button-container-outside">
                  {userDetails[0].userTypr !== "user" && (
                    <button
                      className="button-container"
                      onClick={handleClickAdmin}
                    >
                      view
                    </button>
                  )}
                </div>

                <div className="inside-container">
                  <h1>Welcome to Your Profile</h1>
                  <div className="icon-container">
                    <i
                      class="fa fa-solid fa-user"
                      style={{ fontSize: "25px", color: "white" }}
                    ></i>
                  </div>
                  <div className="user-details-container">
                    <div>
                      <sapn className="details">
                        <i class="fa fa-user" aria-hidden="true"></i>
                        UserName:-
                      </sapn>
                      {userDetails[0].username}
                    </div>
                    <div>
                      <sapn className="details">
                        <i class="fa fa-user" aria-hidden="true"></i>Name:-
                      </sapn>
                      {userDetails[0].name}
                    </div>
                    <div>
                      <sapn className="details">
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        Phone:-
                      </sapn>
                      {userDetails[0].phone}
                    </div>
                    <div>
                      <sapn className="details">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        Email:-
                      </sapn>
                      {userDetails[0].email}
                    </div>
                    <div>
                      <sapn className="details">
                        <i class="fa fa-snowflake-o" aria-hidden="true"></i>
                        WebsiteName:-
                      </sapn>
                      {userDetails[0].website}
                    </div>
                  </div>
                  <div className="address-container">
                    <span className="details">
                      <i class="fa fa-home" aria-hidden="true"></i>Address:-
                    </span>
                    <div>
                      <div>{userDetails[0].address.city}</div>
                      <div>{userDetails[0].address.street}</div>
                      <div>{userDetails[0].address.suite}</div>
                      <div>{userDetails[0].address.zipcode}</div>
                    </div>
                  </div>
                  <div className="company-container">
                    <span className="details">
                      <i class="fa fa-building" aria-hidden="true"></i>
                      Office Address:-
                    </span>
                    <div>
                      <div>{userDetails[0].company.bs}</div>
                      <div>{userDetails[0].company.catchPhrase}</div>
                      <div>{userDetails[0].company.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="nothing">Nothing is here</div>
            )}

            {userDataBase.length !== 0 && (
              <div className="admin-container">
                <table>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Contact</th>
                    <th>Company</th>
                    <th>Country</th>
                  </tr>
                  <>
                    {userDataBase.map((el, i) => {
                      return (
                        <tr>
                          <td key={i}>{el.id}</td>
                          <td>{el.name}</td>
                          <td>{el.username}</td>
                          <td>{el.email}</td>
                          <td>{el.phone}</td>
                          <td>{el.company.name}</td>
                          <td>{el.address.city}</td>
                        </tr>
                      );
                    })}
                  </>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Login;
