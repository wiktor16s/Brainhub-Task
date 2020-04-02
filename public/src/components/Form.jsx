import React, { Component } from "react";
import { connect } from "react-redux";
import { contactsFetched } from "../storage/actions/index.js";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      date: ""
    };

    this.formRef = React.createRef();
    this.emailRef = React.createRef();
  }

  componentDidMount() {
    this.props.contactsFetched([{ test: "test" }]);
  }

  checkInputValid(e) {
    if (e.target.value.length > 0) {
      e.target.classList.remove("is-invalid");
      e.target.classList.add("is-valid");
    } else {
      e.target.classList.remove("is-valid");
      e.target.classList.add("is-invalid");
    }
  }

  testEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  checkEmail(email) {
    if (this.testEmail(email)) {
      this.emailRef.current.classList.remove("is-invalid");
      this.emailRef.current.classList.add("is-valid");
    } else {
      this.emailRef.current.classList.remove("is-valid");
      this.emailRef.current.classList.add("is-invalid");
    }
  }

  render() {
    return (
      <form ref={this.formRef}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={e => {
                this.checkInputValid(e);
                this.setState({ firstName: e.target.value });
              }}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={e => {
                this.checkInputValid(e);
                this.setState({ lastName: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <input
              ref={this.emailRef}
              type="email"
              className="form-control"
              placeholder="Email"
              onBlur={e => {
                this.checkEmail(e.target.value);
              }}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>

          <div className="col">
            <input
              type="date"
              className="form-control"
              placeholder="date"
              onChange={e => {
                this.checkInputValid(e);
                this.setState({ date: e.target.value });
              }}
            />
          </div>

          <div className="col">
            <button type="submit" className="form-control themeButtonColor">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};
const mapDispatchToProps = { contactsFetched };

export default connect(mapStateToProps, mapDispatchToProps)(Form);
