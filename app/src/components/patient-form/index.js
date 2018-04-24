import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Form, Message } from 'semantic-ui-react';
import { patientType } from '../../types';
import { formatDate } from '../../util';
import './patient-form.css';

class PatientForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      description: '',
      patient: props.patient,
      admin: props.admin,
      formError: true,
      open: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.clearState = this.clearState.bind(this);
    this.shouldSubmitButtonBeEnabled = this.shouldSubmitButtonBeEnabled.bind(this);
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

    const error =
      this.state.firstName === '' ||
      this.state.lastName === '' ||
      this.state.email === '' ||
      this.state.description === '';

    this.setState({
      error
    });

    if (this.state.admin || !error) {
      this.props.dispatch(
        this.state.admin
          ? this.state.patient
          : {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            description: this.state.description
          },
        this.state.admin
      );
      this.clearState();
    }
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
      description: '',
      error: false
    });
  }

  shouldSubmitButtonBeEnabled() {
    const admin = this.state.admin;

    if (admin) {
      return this.state.patient;
    }
    return true;
  }

  render() {
    const admin = this.state.admin;
    const patient = this.state.patient;
    const error = this.state.error;
    return (
      <Container fluid>
        <Header>Information
          <Header.Subheader>
            {admin ? (patient && `${patient.firstName} checked in at ${formatDate(patient.date)}`) : 'Enter your information below.'}
          </Header.Subheader>
        </Header>
        <Form error={error} onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              onChange={this.handleChange}
              fluid
              name="firstName"
              label="First name"
              placeholder="First"
              readOnly={admin}
              value={admin && patient ? patient.firstName : this.state.firstName}
            />
            <Form.Input
              onChange={this.handleChange}
              fluid
              name="lastName"
              label="Last name"
              placeholder="Last"
              readOnly={admin}
              value={admin && patient ? patient.lastName : this.state.lastName}
            />
          </Form.Group>
          <Form.Input
            onChange={this.handleChange}
            fluid
            name="email"
            label="Email"
            placeholder="example@gmail.com"
            type="email"
            readOnly={admin}
            value={admin && patient ? patient.email : this.state.email}
          />
          <Form.TextArea
            onChange={this.handleChange}
            name="description"
            autoHeight
            label="Condition"
            placeholder={admin ? undefined : 'Describe your condition'}
            readOnly={admin}
            value={admin && patient ? patient.description : this.state.description}
          />
          <Form.Group widths="equal">
            <Form.Button type="submit" fluid primary disabled={!this.shouldSubmitButtonBeEnabled()}>
              {admin ? 'Done' : 'Submit'}
            </Form.Button>
            {!admin && (
              <Form.Button type="reset" fluid secondary onClick={this.handleReset}>
                Clear
              </Form.Button>
            )}
          </Form.Group>
          <Message error header="Incomplete!" content="Please fill out all of the form fields." />
        </Form>
      </Container>
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
