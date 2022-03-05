import "./App.css";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextFrom";
import About from "./components/About";
import Alert from "./components/Alert";
import React,{ useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#064d99';
      showAlert('Dark Mode enabled', 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success')
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about"  element={<About/>}></Route>
            <Route path="/" element={<TextFrom heading="Enter Your Text To Analyze" mode={mode} showAlert={showAlert}></TextFrom>}>
              
            </Route>
          </Routes>
          
        </div>
        
      </Router>

    </>
  );
}

export default App;
