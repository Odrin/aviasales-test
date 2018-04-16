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
      result.push(remainder.padEnd(3, '0'));
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

// только до 9
export function pluralize([zero, one, many], number) {
  if (number === 1) {
    return one;
  }

  if (number > 1 && number < 5) {
    return many;
  }

  return zero;
}
