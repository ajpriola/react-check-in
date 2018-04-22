import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import NowServing from '../../components/now-serving';

describe('NowServing', () => {
  it('renders without crashing', () => {
    mount(<NowServing />);
  });
});
