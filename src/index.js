import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { UserContext } from "./utils/context";
import axios from "axios";

//page references
import Home from "./pages/home.js";
import CreateAccount from "./pages/createaccount.js";
import About from "./pages/about.js";
import Login from "./pages/login.js";
import TOS from "./pages/tos.js";
import MakeTransactions from "./pages/maketransactions.js";

//Component references
import Nav from "./components/nav.js";

//axios to get data from server

const useDataApi = (initialUrl, initialData) => {
  const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });
  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await axios(url);
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  return [state, setUrl];
};
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

//spa
function Spa() {
  // to be used with strapi DB later
  // const [query, setQuery] = useState("http://localhost:1337/api/accounts");
  // const [{ data, isLoading, isError }, doFetch] = useDataApi(query, {
  //   data: [],
  // });
  
  const [accounts, setAccounts] = useState([
    {
      accountNumber: "123546789",
      accountCreationDate: "2021-02-01",
      balance: 1000000000,
      transactions: [
        {
          id: "test-transaction",
          Transactor: "Jane Doe",
          date: "2021-02-01",
          type: "Deposit",
          vendor: "Born rich bank",
          category: "income",
          transactor: "Jane Doe",
          amount: 1000000000,
          balance: 1000000000,
        }
      ],
      authorizedUsers: [
        {
          firstName: "Jane",
          lastName: "Doe",
          email: "456@yourMail.com",
          phoneNumber: "456-789-0123",
          password: "456",
        },
      ],
    },
  ]);

  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    // need to clear this when testing is done
    firstName: "Jane",
    lastName: "Doe",
    email: "456@yourMail.com",
    phoneNumber: "456-789-0123",
    password: "456",
  });
  const [activeAccount, setActiveAccount] = useState({
    // need to clear this when testing is done
    accountNumber: "999999999",
    accountCreationDate: "2021-02-01",
    balance: 9999,
    transactions: [
      {
        id: "test-transaction",
        Transactor: "Jane Doe",
        date: "2021-02-01",
        type: "Deposit",
        vendor: "Born rich bank",
        category: "income",
        transactor: "Jane Doe",
        amount: 9999,
        balance: 9999,
      },
    ],
    authorizedUsers: [
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "456@yourMail.com",
        phoneNumber: "456-789-0123",
        password: "456",
      },
    ],
  });
  const [currentPath, setCurrentPath] = useState(window.location.pathname.toString().toLowerCase());
  
  useEffect(() => {
    // updates accounts when active account is changed
    let tempAccounts = [...accounts];
    let index = tempAccounts.findIndex(
      //finds index of active account within accounts
      (account) => account.accountNumber === activeAccount.accountNumber
    );
    tempAccounts[index] = activeAccount;
    setAccounts(tempAccounts);

    /*  To be used with strapi DB later, might to be changed or fixed
    // let tempData = [];
    // tempAccounts.map((account, index) => {
    //   tempData.push({ id: index + 1, attributes: account });
    // });
    // let dataToSend = JSON.stringify({ data: tempData });
    // //console.log("index.js / useEffect / tempData", tempData);
    // let config = {
    //   method: "put",
    //   maxBodyLength: Infinity,
    //   url: "localhost:1337/api/accounts",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: dataToSend,
    // };
    // axios
    //   .request(config)
    //   .then(function (response) {
    //     //console.log(JSON.stringify(response.data));
    //   })
    //   .catch((error) => {
    //     //console.log(error);
    //   }); */
  }, [activeAccount]);

  // useEffect(() => { // to be used with strapi DB later
  //   // updates accounts when data is changed from server
  //   if (data.length > 0) {
  //     //console.log("index.js / useEffect / data has data", data);
  //     let tempAccounts = [];
  //     data.map((account) => {
  //       tempAccounts.push(account.attributes);
  //     });
  //     setAccounts(tempAccounts);
  //   }
  // }, [data]);

  const inlineBlock = {
    display: "inline-block",
  };
  let navigate = useNavigate();

  return (
    <div className="bg-">
      <UserContext.Provider
        value={{
          user,
          setUser,
          activeAccount,
          setActiveAccount,
          isloggedIn,
          setIsLoggedIn,
          accounts,
          setAccounts,
          //doFetch, // to be used with strapi DB later
          currentPath,
          setCurrentPath,
        }}
      >
        <div className="container">
          {/* Header */}
          <div className="fs-1 fw-bold text-uppercase " style={inlineBlock}>
            <img
              src={require("./pages/bankLogo.png")}
              alt="..."
              width="150"
              height="75"
            />
            Bottomless Vault Banking
          </div>
        </div>
        <Nav />
        {isloggedIn && ( //if logged in, show welcome message
          <div className="container">
          <div className="row">
            <div className="text-start col">
              <div className="fw-bolder fs-4" >{`Welcome,  ${user.firstName} `}</div>
              <div className="fw-bold" >{`Account Number ${activeAccount.accountNumber} `}</div>
            </div>
            <div className="text-end col align-middle">
              
              <button //logout button
                onClick={() => {
                  setIsLoggedIn(false);
                  setUser({});
                  setActiveAccount({});
                  navigate("/");
                }}
                className="btn btn-danger m-3 fs"
              >
                Logout
              </button>
            </div>
            </div>
          </div>
        )}

        <Routes>
          <Route 
            exact
            path="/"
            element={
              <Home
                isloggedIn={isloggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
                setActiveAccount={setActiveAccount}
              />
            }
          />
          <Route 
            path="/createAccount"
            element={
              <CreateAccount
                isLoggedIn={isloggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
                setActiveAccount={setActiveAccount}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                setIsLoggedIn={setIsLoggedIn}
                setUser={setUser}
                setActiveAccount={setActiveAccount}
              />
            }
          />
          <Route
            path="/maketransactions"
            element={
              <MakeTransactions
                activeAccount={activeAccount}
                setActiveAccount={setActiveAccount}
                user={user}
                isloggedIn={isloggedIn}
              />
            }
          />

          <Route path="/about" element={<About />} />
          <Route path="/TOS" element={<TOS />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
ReactDOM.render(
  <Router>
    <Spa />
  </Router>,
  document.getElementById("root")
);

export default Spa;
