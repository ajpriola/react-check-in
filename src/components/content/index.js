import React from 'react';
import { Route } from 'react-router-dom';
import UserContent from './user-content';
import AdminContent from './admin-content';
import NowServing from '../now-serving';
import './content.css';

const Content = () => (
  <div className="content-container">
    <div className="row">
      <NowServing />
    </div>
    <div className="row">
      <Route exact path="/" component={UserContent} />
      <Route path="/admin" component={AdminContent} />
    </div>
  </div>
);

export default Content;
