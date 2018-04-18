import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './checkin-form.css';

class CheckInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(this.state);
    this.clearState();
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleReset() {
    this.clearState();
  }

  clearState() {
    this.setState({
      name: '',
      email: ''
    });
  }

  render() {
    return (
      <div className="form-container">
        <form className="checkin-form" onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <div className="form-button-container">
            <input className="form-button" type="reset" value="Clear" />
            <input className="form-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

CheckInForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default CheckInForm;
