import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import NowServing from '../../containers/now-serving';
import UserContent from './user-content';
import AdminContent from './admin-content';
import './content.css';

const Content = () => (
  <div className="content-container">
    <Container fluid>
      <NowServing />
      <Route exact path="/" component={UserContent} />
      <Route path="/admin" component={AdminContent} />
    </Container>
  </div>
);

export default Content;
