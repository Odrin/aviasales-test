import * as classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CurrencySwitcher.css';
import {
  CURRENCY_EUR,
  CURRENCY_RUB,
  CURRENCY_USD,
} from '../constants/currencyCode';

const availableCurrency = [
  CURRENCY_RUB,
  CURRENCY_USD,
  CURRENCY_EUR
];

function CurrencySwitcher({ currency, onChange }) {

  return (
    <div className="currency-switcher">
      <p className="currency-title">валюта</p>
      <div className="switcher">
        {
          availableCurrency.map((code, index, arr) => {
            const className = classnames('switcher-button', {
              active: code === currency,
              first: index === 0,
              last: index === arr.length - 1,
            });

            return (
              <button
                key={code}
                className={className}
                onClick={() => onChange(code)}
              >
                {code}
              </button>
            );
          })
        }
      </div>
    </div>
  );
}

CurrencySwitcher.propTypes = {
  currency: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

CurrencySwitcher.defaultProps = {};

export default CurrencySwitcher;
