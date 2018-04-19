import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './checkin-list-item.css';

class CheckInListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { patient: props.patient };
  }

  render() {
    return (
      <div className="list-item-container">
        <div className="list-item-group-vertical">
          <h1 className="list-item-title">{this.state.patient.name}</h1>
          <h2 className="list-item-subtitle">{this.state.patient.email}</h2>
        </div>
      </div>
    );
  }
}

CheckInListItem.propTypes = {
  patient: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default CheckInListItem;
