import React from "react";
import {BrowserRouter as Router,Switch,Route,Redirect,} from "react-router-dom";
import TopMenu from "./components/TopMenu";
import LandingPage from "./components/LandingPage";
import ControlledCarousel from "./components/ControlledCarousel";
//-----------------------Courses
import Courses from "./components/courses/Courses";
import UpdateCourse from "./components/courses/UpdateCourse";
import NewCourse from "./components/courses/NewCourse";
//-----------------------Contacts
import Contacts from "./components/contacts/Contacts";
import UpdateContact from "./components/contacts/UpdateContact";
import NewContact from "./components/contacts/NewContact";
//-----------------------Quizes
import Quizes from "./components/quizes/Quizes";
import UpdateQuiz from "./components/quizes/UpdateQuiz";
import NewQuiz from "./components/quizes/NewQuiz";
//-----------------------Assignments
import Assignments from "./components/assignments/Assignments";
import UpdateAssignment from "./components/assignments/UpdateAssignment";
import NewAssignment from "./components/assignments/NewAssignment";
//--------------------Notifications
import Notifications from "./components/notifications/Notifications";
import UpdateNotification from "./components/notifications/UpdateNotification";
import NewNotification from "./components/notifications/NewNotification";
//------------------Login/Register
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import Contact_cr from "./components/Contact_cr";
import NotFound from "./components/NotFound";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div>
      <ToastContainer />
        <TopMenu />
        <div style={{ padding: "10px" }}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          
{/*----------------COURSES */}
          <Route path="/courses/new" component={NewCourse} />
          {/*Passing ID is compulsory to identify which product will be updated */}
          <Route path="/courses/update/:id" component={UpdateCourse} />
          <Route path="/courses/:page?" component={Courses} />
{/*----------------QUIZES */}
          <Route path="/quizes/new" component={NewQuiz} />
          <Route path="/quizes/update/:id" component={UpdateQuiz} />
          <Route path="/quizes" component={Quizes} />
{/*----------------ASSIGNMENTS */}
          <Route path="/assignments/new" component={NewAssignment} />
          <Route path="/assignments/update/:id" component={UpdateAssignment} />
          <Route path="/assignments" component={Assignments} />
{/*----------------NOTIFICATIONS */}
          <Route path="/notifications/new" component={NewNotification} />
          <Route path="/notifications/update/:id" component={UpdateNotification} />
          <Route path="/notifications" component={Notifications} />
{/*----------------CONTACT */}
          <Route path="/contacts/new" component={NewContact} />
          <Route path="/contacts/update/:id" component={UpdateContact} />
          <Route path="/contacts" component={Contacts} />

          <Route path="/contact-cr" exact component={Contact_cr} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/carousel" exact component={ControlledCarousel} />
          
          <Redirect to="/not-found" />
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
