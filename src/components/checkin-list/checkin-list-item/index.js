import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CheckInListItem extends Component {
  constructor(props) {
    super(props);

    this.state = { patient: props.patient };
  }

  render() {
    return (
      <div className="list-item-container">
        Name: {this.state.patient.name}, Email: {this.state.patient.email}
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
