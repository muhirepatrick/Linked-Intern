import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes , Route} from 'react-router-dom';

import App from './App';
import Login from './Login.jsx';
import Signin from './Signin.jsx';
import Companysign from './components/companysign.jsx';
import Person from './components/Person.jsx';


// import the clients or stu
import Dashclients from './components/Dashclients.js';
import Logobook from './components/dashcomp/Logobook';
import Profile from './components/dashcomp/Profile.jsx';
import Institutions from './components/dashcomp/Dashpersonhome.jsx';
import Application from './components/dashcomp/Application.jsx';
import History from './components/dashcomp/History.jsx';

// import company links
import DashCompany from "./components/DashCompany.js"
import DashComphome from './components/companydash/DashComphome.jsx';
import CompanyProfile from './components/companydash/CompanyProfile.jsx';
import Historycomp from "./components/companydash/Historycomp.jsx";
import CompanyApplication from  "./components/companydash/CompanyApplication.jsx";
import Logbookcomp from "./components/companydash/Logobookcomp.jsx"

// import lecture
import DashboardLecture from './components/DashLecture.js';
import LectureApplication  from "./components/lecturedash/LectureApplication.jsx";
import LectureDashhome from "./components/lecturedash/LectureDashhome.jsx"
import LectureHistory from "./components/lecturedash/LectureHistory.jsx";
import LectureLog from "./components/lecturedash/LectureLog.jsx"
import LectureProfile from "./components/lecturedash/LectureProfile.jsx"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}>
    </RouterProvider> */}
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="signin" element={<Signin />} >
        <Route path="" element={<Person />} />
        <Route path="company" element={<Companysign />} />
      </Route>
      <Route path="dashclient" element={<Dashclients />} >
        <Route path = "" element = {<Institutions />}/>
        <Route path = "logbook" element = {<Logobook />}/>
        <Route path = "person" element = {<Profile />}/>
        <Route path = "history" element = {<History />}/>
        <Route path = "application" element = {<Application />}/>
        <Route path = "application/:id" element = {<Application />}/>
      </Route>
      <Route path="dashboardcompany" element={<DashCompany />} >
        <Route path = "" element = {<DashComphome />}/>
        <Route path = "companyinterns" element = {<Logbookcomp />}/>
        <Route path = "companyprofile" element = {<CompanyProfile />}/>
        <Route path = "companyhistory" element = {<Historycomp />}/>
        <Route path = "postinternship" element = {<CompanyApplication />}/>
      </Route>
      <Route path="DashboardLecture" element={<DashboardLecture />} >
        <Route path = "" element = {<LectureDashhome />}/>
        <Route path = "Lecturelogbook" element = {<LectureLog />}/>
        <Route path = "Lectureprofile" element = {<LectureProfile />}/>
        <Route path = "Lecturehistory" element = {<LectureHistory />}/>
        <Route path = "Lectureapplication" element = {<LectureApplication />}/>
      </Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
