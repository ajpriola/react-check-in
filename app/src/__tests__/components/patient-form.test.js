import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import PatientForm from '../../components/patient-form';

describe('PatientForm', () => {
  it('renders without crashing', () => {
    mount(<PatientForm dispatch={() => {}} />);
  });
});
