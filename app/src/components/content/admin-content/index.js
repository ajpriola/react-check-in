import React from 'react';
import { Grid } from 'semantic-ui-react';
import CheckInList from '../../../containers/checkin-list';
import PatientForm from '../../../containers/patient-form';

const AdminContent = () => (
  <Grid relaxed stackable>
    <Grid.Row verticalAlign="top" centered>
      <Grid.Column stretched largeScreen={8} width={10} floated="left">
        <CheckInList admin />
      </Grid.Column>
      <Grid.Column largeScreen={6} width={6} floated="right">
        <PatientForm admin />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default AdminContent;
