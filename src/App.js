import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#303030";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route path="/about" element={ <About />}>
           
          </Route>
          <Route path="/" element={<div className="container">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyse "
                mode={mode}
              />
            </div>}>
            
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
