import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Content from '../../components/content';

describe('Content', () => {
  it('renders', () => {
    shallow(<Content />);
  });
});
