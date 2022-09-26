import React, { useState } from 'react';
import Switch from 'react-switch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSunBright } from '@fortawesome/sharp-solid-svg-icons';

interface Props {
  onChange: (checked: boolean) => void;
  color?: string;
}

const SwitchBtn = ({ onChange, color }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(checked: boolean) {
    setIsChecked(checked);
    onChange(checked);
  }

  const sunStyle: React.CSSProperties = {
    position: 'absolute',
    top: 5,
    right: 5,
    fontSize: 18,
  };

  const moonStyle: React.CSSProperties = {
    position: 'absolute',
    top: 5,
    left: 5,
    fontSize: 18,
  };

  return (
    <label aria-label='toggle theme'>
      <Switch
        onChange={handleChange}
        checked={isChecked}
        uncheckedIcon={
          <FontAwesomeIcon
            icon={faSunBright}
            style={sunStyle}
            color='black'
            title='light-mode'
          />
        }
        checkedIcon={
          <FontAwesomeIcon
            icon={faMoon}
            style={moonStyle}
            color='white'
            title='dark-mode'
          />
        }
        onColor={color}
        offColor={color}
        role='switch'
      />
    </label>
  );
};

export default SwitchBtn;
