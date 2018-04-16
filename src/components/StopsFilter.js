import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../styles/StopsFilter.css';
import { pluralize } from '../utils/format';
import Checkbox from './Checkbox';

const labels = [
  'пересадок',
  'пересадка',
  'пересаки'
];

class StopsFilter extends PureComponent {
  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    stops: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  static getDerivedStateFromProps(nextProps, prevState) {
    const { min, max } = nextProps;
    const range = [];

    for (let i = min; i <= max; i++) {
      range.push(i);
    }

    return { range };
  }

  state = {
    range: [],
  };

  onAllClick = () => {
    const { onChange } = this.props;
    const { range } = this.state;

    onChange([...range]);
  };

  onChange = (count) => {
    const { stops, onChange } = this.props;
    const index = stops.indexOf(count);

    if (index !== -1) {
      onChange(
        [
          ...stops.slice(0, index),
          ...stops.slice(index + 1),
        ]
      );
    } else {
      onChange([...stops, count]);
    }
  };

  onOnlyClick = (count) => {
    const { onChange } = this.props;

    onChange([count]);
  };

  getLabel(count) {
    if (count === 0) {
      return `Без ${pluralize(labels, count)}`;
    }

    return `${count} ${pluralize(labels, count)}`;
  }

  render() {
    const { stops } = this.props;
    const { range } = this.state;
    const all = stops.length === range.length;

    return (
      <div className="stops-filter">
        <p className="stops-title">количество пересадок</p>
        <div className="stops-content">
          <div className="stops-row">
            <Checkbox
              checked={all}
              onChange={this.onAllClick}
            >
              Все
            </Checkbox>
          </div>
          {
            range.map(count => (
              <div className="stops-row" key={count.toString()}>
                <Checkbox
                  checked={stops.includes(count)}
                  onChange={() => this.onChange(count)}
                >
                  {this.getLabel(count)}
                </Checkbox>
                <button
                  className="stops-only"
                  onClick={() => this.onOnlyClick(count)}
                >
                  только
                </button>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default StopsFilter;
