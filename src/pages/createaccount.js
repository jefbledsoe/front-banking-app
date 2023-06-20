import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/context";
import NewUserForm from "../components/NewUserForm";
import UserOrAccountCreatedCard from "../components/UserOrAccountCreatedCard";
import { act } from "react-dom/test-utils";

function CreateAccount() {
  // imported context
  const { accounts } = useContext(UserContext); //correct
  const { setActiveAccount, activeAccount } = useContext(UserContext);
  const { setUser } = useContext(UserContext);
  const { setIsLoggedIn } = useContext(UserContext);
  const { setAccounts } = useContext(UserContext);
  const { isloggedIn } = useContext(UserContext);
  const { setCurrentPath } = useContext(UserContext);
  //isloggedIn
  // local states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [accountToDisplay, setAccountToDisplay] = useState("");
  const [isCreatedAddUser, setIsCreatedAddUser] = useState(false);
  const [isNewUserFormVisible, setIsNewUserFormVisible] = useState(true);
  const [isAlertActive, setIsAlertActive] = useState(false);

  const fieldsList = [
    {
      id: "firstNameInput",
      label: "First Name",
      type: "firstName",
      placeholder: "Your first name here",
      value: firstName,
      setValue: setFirstName,
      onChange: (e) => {
        setFirstName(e.target.value);
        allFieldsEmptyCheck();
      },
      isFieldExtraMessageEnabled: false,
      fieldExtraMessage: "",
      isAlertActive: false,
      alertFieldMessage: "",
    },
    {
      id: "lastNameInput",
      label: "Last Name",
      type: "lastName",
      placeholder: "Your last name here",
      value: lastName,
      setValue: setLastName,
      onChange: (e) => {
        setLastName(e.target.value);
        allFieldsEmptyCheck();
      },
      isFieldExtraMessageEnabled: false,
      fieldExtraMessage: "",
      isAlertActive: false,
      alertFieldMessage: "",
    },
    {
      id: "phoneNumberInput",
      label: "Phone Number",
      type: "phoneNumber",
      placeholder: "Your phone number here",
      value: phoneNumber,
      setValue: setPhoneNumber,
      onChange: (e) => {
        setPhoneNumber(e.target.value);
        allFieldsEmptyCheck();
      },
      isFieldExtraMessageEnabled: false,
      fieldExtraMessage: "",
      isAlertActive: false,
      alertFieldMessage: "",
    },
    {
      id: "emailInput",
      label: "Email",
      type: "email",
      placeholder: "Your email here",
      value: email,
      setValue: setEmail,
      onChange: (e) => {
        setEmail(e.target.value);
        allFieldsEmptyCheck();
      },
      isFieldExtraMessageEnabled: true,
      fieldExtraMessage: "We will never share your email with anyone else.",
      isAlertActive: false,
      alertFieldMessage: "",
    },
    {
      id: "passwordInput",
      label: "Password",
      type: "password",
      placeholder: "Your password here",
      value: password,
      setValue: setPassword,
      onChange: (e) => {
        setPassword(e.target.value);
        allFieldsEmptyCheck();
      },
      isFieldExtraMessageEnabled: true,
      fieldExtraMessage: "Must be at least 8 characters long.",
      isAlertActive: false,
      alertFieldMessage: "",
    },
  ];
  //fucntionality
  useEffect(() => {
    setCurrentPath("/createaccount/");
  }, []);

  useEffect(() => {
    console.log("useEffect", accounts);
  }, [accounts]);

  useEffect(() => {
    setIsAlertActive(false);
  }, [firstName, lastName, phoneNumber, email, password]);

  function clearForm() {
    //clears the input fields
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
  }
  function genNewAccount() {
    // generates random account number, inits account, adds user, returns account
    // TODO - need a fix to ensure that the new account number is unique
    let newAccountNumber = Math.floor(Math.random() * 100000000000);
    let creationDate = new Date().toISOString().slice(0, 10);
    let newAccount = {
      accountNumber: newAccountNumber,
      accountCreationDate: creationDate,
      balance: 0,
      transactions: [],
      authorizedUsers: [
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
        },
      ],
    };
    return newAccount;
  }
  function addAuthorizedUser(accountNumberToFind) {
    // adds user to account number
    setIsNewUserFormVisible(true); 
    let tempActiveAccount = {...activeAccount};
    let newAuthorizedUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    tempActiveAccount.authorizedUsers.push(newAuthorizedUser);   
    console.log("newUser added, account is now: ", tempActiveAccount);
    setActiveAccount(tempActiveAccount);
  }
  function allFieldsEmptyCheck() {
    // checks if all fields are filled in and enables submit button
    if (!firstName && !lastName && !phoneNumber && !email && !password) {
      setIsSubmitDisabled(true);
      return true;
    } else {
      setIsSubmitDisabled(false);
      return false;
    }
  }
  function handleCreate() {
    // if the account already exists, add the user to the account
    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !email ||
      !password ||
      password.length < 8
    ) {
      window.event.preventDefault();
      setIsAlertActive(true);
      return;
    }

    if (isloggedIn) {
      addAuthorizedUser(activeAccount.accountNumber);
      clearForm();
      setIsNewUserFormVisible(false);
    } else {
      // declare temp variable
      let newAccount = genNewAccount();
      //set states and clear form
      setAccountToDisplay(newAccount);
      setAccounts([...accounts, newAccount]);
      setIsNewUserFormVisible(false);
      clearForm();
      setIsLoggedIn(true);
      setActiveAccount(newAccount);
      setUser(newAccount.authorizedUsers[0]);
    }
    // re-disable submit button after submit clicked
    setIsSubmitDisabled(true);
  }

  return (
    // retuns the form to create a new account then the new account details once created
    <div id="create-account-form" className="container">
      <div className="card">
        {/* outter most div */}
        {isNewUserFormVisible && (
          <NewUserForm
            id="new-user-form-container"
            title="Create Account"
            fields={fieldsList}
            isUserFormSubmitButtonDisabled={isSubmitDisabled}
            submitButtonClickHandler={handleCreate}
            submitButtonText="Submit"
            isloggedIn={isloggedIn}
            showAlert={isAlertActive} /////////////
          />
        )}
        {!isNewUserFormVisible && (
          <UserOrAccountCreatedCard
            accountToDisplay={accountToDisplay}
            addAuthorizedUser={addAuthorizedUser}
            setIsLoggedIn={setIsLoggedIn}
            setActiveAccount={setActiveAccount}
            setUser={setUser}
            submitButtonTooltipMessage="go to Make Transactions page"
            isloggedIn={isloggedIn}
          />
        )}
      </div>
    </div> // end of card and otter most div
  );
}
export default CreateAccount;
