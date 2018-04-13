import * as classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/TicketItem.css';
import {
  formatCurrencySymbol,
  formatPrice,
} from '../utils/format';
import Panel from './Panel';

function TicketItem(props) {
  const {
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price,
    currency,
  } = props;

  return (
    <Panel className="ticket-item">
      <div className="ticket-left">
        <img className="carrier-ticket" src={`//pics.avs.io/99/36/${carrier}@2x.png`} alt={carrier} />
        <button className="ticket-buy-button">
          Купить<br /> за {formatPrice(price)}<span className="currency">{formatCurrencySymbol(currency)}</span>
        </button>
      </div>
      <div className="ticket-right">

        <div className="ticket-row">
          <div className="time">{departure_time}</div>
          <div className="stops-container">
            <div className={classnames('stops', { hidden: stops === 0 })}>{stops} пересадка</div>
            <div className="stops-line" />
          </div>
          <div className="time">{arrival_time}</div>
        </div>

        <div className="ticket-row">
          <div className="column-origin">
            <div className="origin">{origin}, {origin_name}</div>
            <div className="date">{departure_date}</div>
          </div>
          <div className="column-destination">
            <div className="destination">{destination_name}, {destination}</div>
            <div className="date">{arrival_date}</div>
          </div>
        </div>

      </div>
    </Panel>
  );
}

TicketItem.propTypes = {
  origin: PropTypes.string.isRequired,
  origin_name: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  destination_name: PropTypes.string.isRequired,
  departure_date: PropTypes.string.isRequired,
  departure_time: PropTypes.string.isRequired,
  arrival_date: PropTypes.string.isRequired,
  arrival_time: PropTypes.string.isRequired,
  carrier: PropTypes.string.isRequired,
  stops: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

TicketItem.defaultProps = {};

export default TicketItem;
