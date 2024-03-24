import React, {useState, useEffect} from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, useLocation,} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PosterPage from "./pages/PosterPage";
import CurrentErrandPage from "./pages/CurrentErrandPage";
import ErrandHistoryPage from "./pages/ErrandHistoryPage";
import DelivererPage from "./pages/DelivererPage";
import OngoingErrandPage from "./pages/OngoingErrandPage";
import CompletedErrandPage from "./pages/CompletedErrandPage";

import { myFirebase } from "./models/MyFirebase";


export default function App() {
  const [myErrands, setMyErrands] = useState([]);
  const [ongoingErrands, setOngoingErrands] = useState([]);
  const [completedErrands, setCompletedErrands] = useState([]);

  const onAddErrand = (errand) => {
    const lastId = myErrands.reduce((maxId, errand) => {
      return errand.id > maxId ? errand.id : maxId;
    }, 0);
    const addedErrand = {...errand, id: +lastId + 1};

    myFirebase.addErrand(addedErrand);
    setMyErrands([...myErrands, addedErrand]);
  };

  const onAcceptErrand = (errand) =>{
    myFirebase.acceptErrand(errand);
    myFirebase.removeErrandFromBoard(errand);
    setMyErrands(myErrands.filter(p=>p.id!==errand.id));
    setOngoingErrands([...ongoingErrands, errand]);
  };

  const onCancelErrand = (errand) => {
    myFirebase.cancelErrand(errand);
    myFirebase.removeErrandFromAccept(errand);
    setOngoingErrands(ongoingErrands.filter(p=>p.id!==errand.id));
    setMyErrands([...myErrands, errand]);
  };

  const onCompleteErrand = (errand) =>{
    myFirebase.completeErrand(errand);
    myFirebase.removeErrandFromAccept(errand);
    setOngoingErrands(ongoingErrands.filter(p=>p.id!==errand.id));
    setCompletedErrands([...completedErrands, errand]);
  };

  useEffect( () => {
    const getErrands = async () => {
      const errands = await myFirebase.getCurrentErrands();
      setMyErrands(errands);
    };

    const getOngoingErrands = async () => {
      const errands = await myFirebase.getOngoingErrands();
      setOngoingErrands(errands);
    };

    const getCompletedErrands = async () => {
      const errands = await myFirebase.getCompletedErrands();
      setCompletedErrands(errands);
    };
    
    getErrands();
    getOngoingErrands();
    getCompletedErrands();
  }, []);


  function RouteBasedWrapper() {
    const location = useLocation();
    if (location.pathname === "/poster") {
      return (
        <div className="posterForm-container">
          <PosterPage onAddErrand={onAddErrand}/>
        </div>
      );
    } 
    if (location.pathname === "/currentErrand"){
      return(
        <CurrentErrandPage myErrands={myErrands}/>
      );
    }
    if (location.pathname === "/errandHistory"){
      return(
        <ErrandHistoryPage completedErrands={completedErrands}/>
      );
    } 
    // deliverer  --------------------------
    if (location.pathname === "/deliverer"){
      return(
        <DelivererPage myErrands={myErrands} onAcceptErrand={onAcceptErrand}/>
      );
    } 
    if (location.pathname === "/ongoingErrands"){
      return(
        <OngoingErrandPage ongoingErrands={ongoingErrands} onCompleteErrand={onCompleteErrand} onCancelErrand={onCancelErrand}/>
      );
    } 
    if (location.pathname === "/completedErrands"){
      return(
        <CompletedErrandPage completedErrands={completedErrands}/>
      );
    } 

    else {
      return (
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<LoginPage />} />
              <Route path="/sign-in" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignupPage />} />
            </Routes>
          </div>
        </div>
      );
    }
  }

  return (
   
    <Router>
      <div className="App">
        <Routes>
          <Route path="*" element={<RouteBasedWrapper/>} />
        </Routes>
      </div>
    </Router>
  );
}
