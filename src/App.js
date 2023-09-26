import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import SideBar from "./components/sideBar";
import Profile from "./components/Profile";
import Contact from "./components/contact";
import Apps from "./components/Todo";
import Resume from "./components/Resume";
import Skill from "./components/skill";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App bg-dcream">
      <Router>
        <Header />
        <div
          className="flex flex-auto
        "
        >
          <SideBar className="z-20" />
          <div className="z-10 ">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/Nikhil_react_portfolio.git"
                element={<Home />}
              ></Route>
              <Route path="/Profile" element={<Profile />}></Route>
              <Route path="/Apps" element={<Apps />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/Resume" element={<Resume />}></Route>
              <Route path="/Skill" element={<Skill />}></Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
