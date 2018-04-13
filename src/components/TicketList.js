import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TicketList.css';
import TicketItem from './TicketItem';

function TicketList({ tickets }) {
  const items = tickets.map((ticket, index) => (
    <TicketItem key={index.toString()} {...ticket} />
  ));

  return (
    <div className="ticket-list">
      {items}
    </div>
  );
}

TicketList.propTypes = {
  tickets: PropTypes.array,
};

TicketList.defaultProps = {
  tickets: [],
};

export default TicketList;
