import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography,Button,Grid } from "@material-ui/core";
import userService from "../services/UserService";
import Login from "./auth/Login";
import logox from './images/logox.PNG';
import LandingPage from "./LandingPage";

//styling
const useStyles = makeStyles((theme) => ({
  link: {
    color: "white",
    paddingRight: "1rem",
    fontSize:"18px",
    
  },
 

  logo:{
    width: "-10%",
    height: "-10%",
  },
  cuimainh:{
        fontFamily:"timesnewroman",
        fontSize:"30px",
        fontWeight:"bold",
        marginTop: "-100px",
        marginLeft: "350px",
        marginBottom:"80px"
   
  },
  cuimainh2:{
    fontFamily:"calibri",
    fontSize:"18px",
    marginTop: "-80px",
    marginLeft: "350px",
    marginBottom:"50px"

},
  cont:{
    flexDirection:"row"

},
appbar:{
backgroundColor:"#e2e3e3",
color: "grey",

}
}));

const TopMenu = () => {
  const classes = useStyles();

  return (

<div>
  <div className={classes.cont}>
      
      <img src={logox} alt="logox" className={classes.logox} />
      <h1 className={classes.cuimainh}>Beauty Palmist</h1>
      <h1 className={classes.cuimainh2}>The Future of Your Beauty</h1>
  </div>
      
    <AppBar position="static" className={classes.appbar}>
      
      <Toolbar>
     
        <Typography variant="h6">
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Typography>

        
{/*SHOW COURSES TAB only if any user is logged in */}
        {userService.isLoggedIn() && (
<>
        <Typography variant="h6">
          <Link to="/courses" className={classes.link}>
            Services
          </Link>
        </Typography>

       
</>
        )}



{userService.isLoggedIn() && (
<>
        <Typography variant="h6">
          <Link to="/assignments" className={classes.link}>
            Booking Requests
          </Link>
        </Typography>

       
</>
        )}

{/*SHOW LOGIN/SIGNUP BUTTONS only if user is "NOT" logged in */}

{!userService.isLoggedIn() ? (
  <>
        <Typography variant="h6">
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </Typography>

        <Typography variant="h6">
          <Link to="/register" className={classes.link}>
            Sign Up
          </Link>
        </Typography>
  </> 
   ) : (
    
    <Button
    variant="contained"
            color="primary"
            onClick={(e) => {
              userService.logout();
              {/*To refresh a page */}
              window.location.reload();
             
      }}
    >
   LogOut {" "} {userService.getLoggedInUser().name} {" "} {userService.getLoggedInUser().role}
  </Button>
        )}

      </Toolbar>
    </AppBar>


</div>
  );
};

export default TopMenu;