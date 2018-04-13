import moment from 'moment';
import {
  CURRENCY_EUR,
  CURRENCY_RUB,
  CURRENCY_USD,
} from '../constants/currencyCode';

export function formatPrice(price) {
  const result = [];
  let _price = price;

  while (_price > 0) {
    const remainder = (_price % 1000).toString();
    _price = Math.floor(_price / 1000);

    if (_price > 0) {
      result.push(padEnd(remainder, 3, '0'));
    } else {
      result.push(remainder);
    }
  }

  return result.reverse().join(' ');
}

export function formatCurrencySymbol(currencyCode) {
  switch (currencyCode) {
    case CURRENCY_RUB:
      return '₽';

    case CURRENCY_USD:
      return '$';

    case CURRENCY_EUR:
      return '€';

    default:
      console.error(`Unknown currency code: ${currencyCode}`);
      return '';
  }
}

export function formatDate(date) {
  return moment(date, 'DD.MM.YY').format('D MMM YYYY, dd');
}

/**
 * String.prototype.padEnd polyfill https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
 * @param {string} str
 * @param {number} targetLength
 * @param {string} padString
 * @returns {string}
 */
export function padEnd(str, targetLength, padString) {
  targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
  padString = String((typeof padString !== 'undefined' ? padString : ' '));
  if (str.length > targetLength) {
    return String(str);
  }
  else {
    targetLength = targetLength - str.length;
    if (targetLength > padString.length) {
      padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
    }
    return String(str) + padString.slice(0, targetLength);
  }
}
