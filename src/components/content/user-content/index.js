import React from 'react';
import { Grid } from 'semantic-ui-react';
import CheckInList from '../../../containers/checkin-list';
import PatientForm from '../../../containers/patient-form';

const UserContent = () => (
  <Grid relaxed>
    <Grid.Row verticalAlign="top" centered>
      <Grid.Column stretched width={6} floated="left">
        <CheckInList />
      </Grid.Column>
      <Grid.Column width={6} floated="right">
        <PatientForm />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default UserContent;
