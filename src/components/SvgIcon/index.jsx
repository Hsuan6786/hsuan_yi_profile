import React from 'react';
import './index.scss';

const SvgIcon= (props) => {
  const {name, color, svgClass, style} = props;
  return (
      <i aria-hidden='true'>
          <svg style={style} className={`svg-class ${svgClass && svgClass}`}>
              <use xlinkHref={'#icon-' + name} fill={color} />
          </svg>
      </i>
  );
};

export default SvgIcon;