import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CheckInListItem from '../../components/checkin-list/checkin-list-item';

describe('CheckInListItem', () => {
  it('renders with a patient', () => {
    const patient = {
      firstName: 'First',
      lastName: 'Last',
      email: 'test@email.com',
      description: 'This is a test',
      id: 0
    };

    const dispatch = () => {};

    shallow(<CheckInListItem patient={patient} dispatch={dispatch} />);
  });
});
