import { Switch } from '@mui/material';
import styled from 'styled-components';

interface ProfileSettingsSwitchProps {
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  name: string;
  togglesPosition: {
    socials: boolean;
    country: boolean;
    online: boolean;
  };
  value: 'socials' | 'country' | 'online';
}

const ProfileSettingsSwitch: React.FC<ProfileSettingsSwitchProps> = ({
  handleChange,
  name,
  togglesPosition,
  value,
}: ProfileSettingsSwitchProps) => {
  console.log(togglesPosition[value]);

  return (
    <ProfileSettingsSwitchWrapper>
      <div className="locationSection__toggle-container">
        <p className="locationSection__country-text">{name}</p>
      </div>
      <div className="toggle__container">
        <CustomSwitch
          checked={togglesPosition[value]}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
          name={value}
        />
      </div>
    </ProfileSettingsSwitchWrapper>
  );
};

export default ProfileSettingsSwitch;

const ProfileSettingsSwitchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem 1rem 2rem;
  font-size: 1.2rem;

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
