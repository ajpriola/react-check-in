import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import CheckInList from '../../components/checkin-list';

describe('CheckInList', () => {
  it('renders with a list of patients', () => {
    const patients = [
      {
        firstName: 'First',
        lastName: 'Last',
        email: 'test@email.com',
        description: 'This is a test',
        id: 0
      }
    ];

    shallow(<CheckInList patients={patients} />);
  });
});
