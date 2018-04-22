import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { patientType } from '../../types';

class PatientForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      description: '',
      patient: props.patient,
      admin: props.admin
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.admin) {
      this.setState({
        patient: nextProps.patient,
        admin: nextProps.admin
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      description: this.state.description
    });
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
    const admin = this.state.admin;
    const patient = this.state.patient;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            onChange={this.handleChange}
            fluid
            name="firstName"
            label="First name"
            placeholder="First name"
            readOnly={admin}
            value={admin && patient ? patient.firstName : this.state.firstName}
          />
          <Form.Input
            onChange={this.handleChange}
            fluid
            name="lastName"
            label="Last name"
            placeholder="Last name"
            readOnly={admin}
            value={admin && patient ? patient.lastName : this.state.lastName}
          />
        </Form.Group>
        <Form.Input
          onChange={this.handleChange}
          fluid
          name="email"
          label="Email"
          placeholder="Your email address"
          type="email"
          readOnly={admin}
          value={admin && patient ? patient.email : this.state.email}
        />
        <Form.TextArea
          onChange={this.handleChange}
          name="description"
          autoHeight
          label="Condition"
          placeholder="Describe your condition"
          readOnly={admin}
          value={admin && patient ? patient.description : this.state.description}
        />
        {!admin && (
          <Form.Group widths="equal">
            <Form.Button type="submit" fluid primary>
              Submit
            </Form.Button>
            <Form.Button type="reset" fluid secondary>
              Clear
            </Form.Button>
          </Form.Group>
        )}
      </Form>
    );
  }
}

PatientForm.defaultProps = {
  admin: false,
  patient: null
};

PatientForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  admin: PropTypes.bool,
  patient: patientType
};

export default PatientForm;
