import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FindStudent from "./page/findStudent7";
import Findpassword from "./page/findpassword";
import Login from "./page/login";
import Loginsuccess from "./page/loginsuccess";
import Main from "./page/main";
import Stusign from "./page/stusign";
import Teasign from "./page/teasign";
import FindTeacher from "./page/findTeacher6";
import StuSubmit from "./page/stuSubmit13";
import TeaSubmit from "./page/teaSubmit12";
import PostboxS from "./page/postboxS14";
import MypageTp from "./page/mypageTpro10 copy";
import MypageTe from "./page/mypageTedit10";
import MypageSp from "./page/mypageSpro";
import MypageSe from "./page/mypageSedit";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/findpassword" exact={true} component={Findpassword} />  
        <Route path="/stusign" exact={true} component={Stusign} />  
        <Route path="/teasign" exact={true} component={Teasign} /> 
        <Route path="/login" exact={true} component={Login} />
        <Route path="/loginsuccess" exact={true} component={Loginsuccess} />
        <Route path="/findstudent" exact={true} component={FindStudent} />
        <Route path="/findteacher" exact={true} component={FindTeacher} />
        <Route path="/stusubmit" exact={true} component={StuSubmit} />
        <Route path="/teasubmit" exact={true} component={TeaSubmit} />
        <Route path="/postboxs" exact={true} component={PostboxS} />
        <Route path="/mypaget/profile" exact={true} component={MypageTp} />
        <Route path="/mypaget/edit" exact={true} component={MypageTe} />
        <Route path="/mypages/profile" exact={true} component={MypageSp} />
        <Route path="/mypages/edit" exact={true} component={MypageSe} />
        <Route path="/" exact={true} component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
