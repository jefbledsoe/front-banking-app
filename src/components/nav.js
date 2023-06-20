import { React } from "react";
import { UserContext } from "../utils/context";
import { useContext, useState, useEffect } from "react";
import NavOption from "./NavOption";

function Nav() {
  const { isloggedIn } = useContext(UserContext);
  const { currentPath } = useContext(UserContext);
  const [navLinks, setNavLinks] = useState([
    {
      id: "home",
      active: true,
      className: "nav-link text-light",
      parentCLassName: "nav-item p-1 bg-secondary",
      to: "/",
      text: "Home",
      tooltip: "takes you to the home page",
    },
    {
      id: "createaccount",
      active: true,
      className: "nav-link text-light",
      parentCLassName: "nav-item p-1",
      to: "/createaccount/",
      text: "Create Account",
      tooltip: "takes you to the create account page",
    },
    {
      id: "login",
      active: true,
      className: "nav-link text-light",
      parentCLassName: "nav-item p-1",
      to: "/login/",
      text: "Login",
      tooltip: "takes you to the login page",
    },
    {
      id: "maketransactions",
      active: false,
      className: "nav-link text-light",
      parentCLassName: "nav-item p-1",
      to: "/maketransactions/",
      text: "Make Transactions",
      tooltip: "takes you to the make transactions page",
    },
    {
      id: "about",
      active: true,
      className: "nav-link text-light",
      parentCLassName: "nav-item p-1",
      to: "/about/",
      text: "About",
      tooltip: "takes you to the about page",
    },
    {
      id: "TOS",
      active: true,
      className: "nav-link text-light",
      parentCLassName: "nav-item p-1",
      to: "/tos/",
      text: "Terms of Service",
      tooltip: "takes you to the terms of service page",
    },
  ]);

  useEffect(() => {
    // based on if the user is logged in, changes the nav links that are visible
    let tempNavLinks = [...navLinks];
    if (isloggedIn) {
      tempNavLinks.map((link) => {
        switch (link.id) {
          case "login":
            link.active = false;
            break;
          case "createaccount":
            link.text = "Add User";
            break;
          case "maketransactions":
            link.active = true;
          default:
        }
      });
    } else {
      tempNavLinks.map((link) => {
        switch (link.id) {
          case "login":
            link.active = true;
            break;
          case "createaccount":
            link.text = "Create Account";
            break;
          case "maketransactions":
            link.active = false;
          default:
        }
      });
    }
    setNavLinks(tempNavLinks);
  }, [isloggedIn]);

  useEffect(() => {
    // based on the current path, changes the nav links that are highlighted
    let tempNavLinks = [...navLinks];
    tempNavLinks.map((link) => {
      if (link.to === currentPath) {
        link.parentClassName = "nav-item p-1 bg-secondary";
      } else {
        link.parentClassName = "nav-item p-1";
      }
    });
    setNavLinks(tempNavLinks);
  }, [currentPath]);

 
  return (
    <div id="nav-bar" className="container">
      <ul id="nav-bar-list" className="nav bg-success">
        {navLinks.map((navLink, index) => {
          if (navLink.active === true) {
            return (
              <NavOption
                key={`navBar-${index}`}
                navLink={navLink}
                
              />
            );
          }
        })}
      </ul>
    </div>
  );
}
export default Nav;
