import { Switch } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';

function HolidayMode() {
  const [togglesHolidayMode, setTogglesHolidayMode] = useState<boolean>(false);

  const handleChange = () => {
    setTogglesHolidayMode(!togglesHolidayMode);
  };
  return (
    <HolidayModeWrapper>
      <div className="locationSection__toggle-container">
        <p className="locationSection__country-text">Holiday mode</p>
      </div>
      <div className="toggle__container">
        <CustomSwitch
          checked={togglesHolidayMode}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
    </HolidayModeWrapper>
  );
}

export default HolidayMode;

const HolidayModeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 1.2rem;
  background-color: #fff;

  .locationSection__toggle-container {
    display: flex;
    align-items: center;
  }

  .toggle__container {
    display: flex;
    align-items: center;
  }
`;

const CustomSwitch = styled(Switch)`
  .MuiSwitch-track {
    background-color: ${({ checked }) =>
      checked ? '#a7655f' : 'grey'} !important; // Custom color for the track
  }

  .MuiSwitch-thumb {
    color: ${({ checked }) =>
      checked ? '#c45f55' : 'grey'}; // Custom color for the thumb
  }
`;
