import React from 'react';
import PropTypes from 'prop-types';
import IcomoonReact from 'icomoon-react';
import iconSet from '../../assets/selection.json';

const Icon = props => {
  const { color, size, icon, className = '' } = props;
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

Icon.defaultProps = {
  color: '#000',
  size: '12px',
};
export default Icon;
