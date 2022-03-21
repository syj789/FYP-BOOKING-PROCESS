import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button,Select } from "@material-ui/core";
import userService from "../../services/UserService";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';


//Styling
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
  },
  child: {
    width: "60%",
  },
  mainh:{
     marginTop:"130px",
  },
  maindiv:{
    marginTop:"30px",

  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft:"0px",
    marginTop:"-15px"
  },


}));


const Register = (props) => {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [role, setRole] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleRole=(e)=>{
    console.log(e);
    setRole(e)
  }
  return (
    <div className={classes.container}>
      <div className={classes.child}>

<h4 className={classes.mainh}> S I G N . U P </h4>
<hr />

<div className={classes.maindiv}>
{/*NAME TEXT FIELD */}       
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />{" "}
        <br />
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

{/*ROLE DROP-DOWN MENU */} 
<br />
<div>
    
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-controlled-open-select-label">Select Role</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={role}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="student">Client</MenuItem>
        <MenuItem value="admin">Owner</MenuItem>
      </Select>
    </FormControl>
  </div> 
 <br />
{/*SIGN-UP BUTTON */}
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            userService
              .register(name, email, password,role)
              .then((data) => {
                console.log(data);
                props.history.push("/login");
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
          }}
        >
          Sign Up
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
