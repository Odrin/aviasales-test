import * as classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Panel.css';

function Panel({ className, children }) {
  return (
    <div className={classnames('panel', className)}>
      {children}
    </div>
  );
}

Panel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Panel.defaultProps = {
  className: undefined,
  children: undefined,
};

export default Panel;
