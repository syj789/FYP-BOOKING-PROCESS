import React from "react";
import GenericService from "./GenericService";
//for decoding tokens
import jwtDecode from "jwt-decode";
import TopMenu from "../components/TopMenu";
import { Divider } from "@material-ui/core";
class UserService extends GenericService {
  constructor() {
    super();
  }
//LOGIN
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("users/login", {email, password})
        .then((token) => {
          localStorage.setItem("token", token);
          resolve(token);
        })
        .catch((err) => {
          reject(err);
        });
    });

 //SIGN UP 
  register = (name, email, password,role) =>
    this.post("users/register", { password, email, name,role });

 //LOG-OUT
  logout = () => {
    localStorage.removeItem("token");
    
  };

//CHECK IF USER IS LOGGED IN
  isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };

//GET LOGGED IN USER by decoding the token
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };

//CHECK USER IS ADMIN
  isAdmin = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role == "admin") return true;
      else return false;
    } else return false;
  };

//CHECK USER IS STUDENT
  isStudent = () => {
    if (this.isLoggedIn()) {
      if (this.getLoggedInUser().role == "student") return true;
      else return false;
    } else return false;
  };

//CHECK USER IS CR
isCR = () => {
  if (this.isLoggedIn()) {
    if (this.getLoggedInUser().role == "CR") return true;
    else return false;
  } else return false;
};

}

let userService = new UserService();
export default userService;
