import React from 'react';
import { Route } from 'react-router-dom';
import UserContent from './user-content';
import AdminContent from './admin-content';
import './content.css';

const Content = () => (
  <div className="content-container">
    <Route exact path="/" component={UserContent} />
    <Route path="/admin" component={AdminContent} />
  </div>
);

export default Content;
