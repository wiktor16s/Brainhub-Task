import React from "react";
import Header from "./modules/Header.jsx";
import Body from "./modules/Body.jsx";
import Footer from "./modules/Footer.jsx";
import "./globalStyles.css";

class App extends React.Component {
  render() {
    return (
      <div className="app" style={{ height: "100vh" }}>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
