import React from "react";
import "./styles/Body.css";
import Form from "../components/Form.jsx";
import Card from "react-bootstrap/Card";

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Card>
                <Card.Body><h6>Do what you want cause a pirate is free. You are a pirate!</h6></Card.Body>
              </Card>
            </div>
            <div className="col-4">
              <Card>
                <Card.Body>
                  <ul>
                    <li>First name is required</li>
                    <li>Last name is required</li>
                    <li>Email is required</li>
                    <li>Date is required</li>
                  </ul>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Form />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
