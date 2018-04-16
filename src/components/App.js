import React, { Component } from 'react';
import '../styles/App.css';
import logo from '../assets/logo.png';
import logo2x from '../assets/logo@2x.png';
import {
  CURRENCY_EUR,
  CURRENCY_RUB,
  CURRENCY_USD,
} from '../constants/currencyCode';
import { formatDate } from '../utils/format';
import CurrencySwitcher from './CurrencySwitcher';
import Panel from './Panel';
import StopsFilter from './StopsFilter';
import TicketList from './TicketList';

const currencyRate = {
  [CURRENCY_RUB]: 1,
  [CURRENCY_USD]: 0.016038,
  [CURRENCY_EUR]: 0.012955739,
};

class App extends Component {
  state = {
    tickets: [],
    currency: CURRENCY_RUB,
    stops: [],
  };

  componentDidMount() {
    fetch('/data/tickets.json')
      .then(response => response.json())
      .then(data => this.setState({
        tickets: data.tickets,
        stops: [...new Set(data.tickets.map(ticket => ticket.stops))]
      }))
      .catch(error => alert(error))
  }

  onStopsChange = (stops) => {
    this.setState({ stops });
  };

  onCurrencyChange = (currency) => {
    this.setState({ currency });
  };

  onBuyClick = () => {
    window.alert('Buy ticket!');
  };

  render() {
    const { tickets, currency, stops } = this.state;
    const mappedTickets = tickets
      .filter(ticket => stops.includes(ticket.stops)) // reduce будет работать быстрее чем map + filter
      .map(ticket => ({
        ...ticket,
        departure_date: formatDate(ticket.departure_date),
        arrival_date: formatDate(ticket.arrival_date),
        price: Math.round(ticket.price * currencyRate[currency]),
        currency,
      }));
    const { min, max } = tickets.reduce((prev, ticket) => {
      if (!prev.min || prev.min > ticket.stops) {
        prev.min = ticket.stops;
      }

      if (!prev.max || prev.max < ticket.stops) {
        prev.max = ticket.stops;
      }

      return prev;
    }, {});

    return (
      <div className="app-container">
        <div className="row-logo">
          <img className="logo" src={logo} srcSet={`${logo2x} 2x`} alt="Aviasales" />
        </div>
        <div className="row-content">
          <div className="column-options">
            <Panel className="panel-options">
              <CurrencySwitcher
                currency={currency}
                onChange={this.onCurrencyChange}
              />

              <StopsFilter
                min={min}
                max={max}
                stops={stops}
                onChange={this.onStopsChange}
              />
            </Panel>
          </div>

          <div className="column-ticket-list">
            <TicketList
              tickets={mappedTickets}
              onBuyClick={this.onBuyClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
