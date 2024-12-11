import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Employee from "./components/Employee";

const App = () => {
  const [showTeam, setShowTeam] = useState(false); // State to control Team visibility

  const handleShowTeam = () => {
    setShowTeam(true); // Show the Team section
  };

  const handleHideTeam = () => {
    setShowTeam(false); // Hide the Team section
  };

  return (
    <div>
      <Navbar onShowTeam={handleShowTeam} />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        {showTeam && ( // Conditionally render the Team section
          <div id="employee">
            <Employee />
          </div>
        )}

        <div id="blog">
          <Blogs />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
