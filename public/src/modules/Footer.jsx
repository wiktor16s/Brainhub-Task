import React from "react";
import "./styles/Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer mt-auto py-3 bg-dark text-white text-center align-items-center">
        <div className="content"> Footer Content </div>
      </footer>
    );
  }
}

export default Footer;
