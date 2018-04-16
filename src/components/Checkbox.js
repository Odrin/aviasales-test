import * as classnames from 'classnames';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import '../styles/Checkbox.css';

let index = 0;

class Checkbox extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool.isRequired,
    children: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.id = `checkbox-input-${index++}`;
  }

  render() {
    const { checked, children, onChange } = this.props;
    const classname = classnames('checkbox', { checked });

    return (
      <label htmlFor={this.id} className={classname}>
        <input type="checkbox" onChange={onChange} checked={checked} id={this.id} className="checkbox-input" />
        <span className="checkbox-icon" />
        <span className="checkbox-text">{children}</span>
      </label>
    );
  }
}

export default Checkbox;
