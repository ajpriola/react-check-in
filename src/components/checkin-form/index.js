import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './checkin-form.css';

class CheckInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      description: ''
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
      firstName: '',
      lastName: '',
      email: '',
      description: ''
    });
  }

  render() {
    return (
      <div className="form-container">
        <form className="checkin-form" onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <div className="form-row">
            <div className="form-input-label">
              <label htmlFor="firstName">First</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-input-label">
              <label htmlFor="lastName">Last</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-input-label">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-input-label">
              <label htmlFor="description">Describe your condition</label>
              <textarea
                type="text"
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
          </div>
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
