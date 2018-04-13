import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../assets/logo.png';
import logo2x from '../assets/logo@2x.png';
import { CURRENCY_RUB } from '../constants/currencyCode';
import { formatDate } from '../utils/format';
import Panel from './Panel';
import TicketList from './TicketList';
import data from '../data/tickets';

class App extends Component {
  state = {
    data: data,
    currency: CURRENCY_RUB,
  };

  render() {
    const { data, currency } = this.state;
    const tickets = data.tickets.map(ticket => ({
      ...ticket,
      departure_date: formatDate(ticket.departure_date),
      arrival_date: formatDate(ticket.arrival_date),
      currency,
    }));

    console.log(data.tickets);

    return (
      <div className="app-container">
        <div className="row-logo">
          <img className="logo" src={logo} srcSet={`${logo2x} 2x`} alt="Aviasales" />
        </div>
        <div className="row-content">
          <div className="column-options">
            <Panel className="panel-options">
              placeholder
            </Panel>
          </div>

          <div className="column-ticket-list">
            <TicketList tickets={tickets} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
