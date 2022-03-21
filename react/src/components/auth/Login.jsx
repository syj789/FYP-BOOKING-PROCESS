import React from "react";
import {useState} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Select } from "@material-ui/core";
import { toast } from "react-toastify";
import userService from "../../services/UserService";
import 'bootstrap/dist/css/bootstrap.min.css';
import ControlledCarousel from "../ControlledCarousel";



const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
  child: {
    width: "60%",
    padding:"30px",
    paddingBottom:"200px",
    paddingTop:"193px",
    marginTop:"250px",
    backgroundColor:"",  
    borderTopLeftRadius:"20px",
    borderBottomLeftRadius:"20px"
  },
  carousel:{
    width:"1200px",
    marginTop:"250px",
    padding:"30px",
    backgroundColor:"#1e97f8",
    borderTopRightRadius:"20px",
    borderBottomRightRadius:"20px"
    
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
 

 
  return (
    <div className={classes.container}>
      <div className={classes.child}>
<h1>Login</h1>
{/*EMAIL TEXT FIELD */}
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />{" "}
        <br />

{/*PASSWORD TEXT FIELD */}
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />{" "}
        <br />

       

 <br />
 {/*LOGIN BUTTON */}        
      <Button
          variant="contained"
          color="primary"
          
          onClick={(e) => {
            userService
              .login(email,password)
              .then((data) => {
                console.log(data);
                window.location.href = "/";
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
          }}
        >
          Login
        </Button>
  
      </div>

     
    </div>

    
  );
        
};

export default Login;
