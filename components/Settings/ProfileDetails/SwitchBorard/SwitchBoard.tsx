import { useState } from 'react';
import styled from 'styled-components';
import ProfileSettingsSwitch from './ProfileSettingsSwitch';

interface IInitialValues {
  socials: boolean;
  country: boolean;
  online: boolean;
}

const initialValues = {
  socials: false,
  country: false,
  online: false,
};

function SwitchBoard() {
  const [togglesPosition, setTogglesPosition] =
    useState<IInitialValues>(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setChecked(!checked);
    // console.log(e.target.checked);
    // console.log(e.target.name);
    const key = e.target.name;
    const value = e.target.checked;

    setTogglesPosition({ ...togglesPosition, [key]: value });
  };
  return (
    <SwitchBoardWrapper>
      <ProfileSettingsSwitch
        togglesPosition={togglesPosition}
        handleChange={handleChange}
        name={'Show socials in profile'}
        value={'socials'}
      />
      <ProfileSettingsSwitch
        togglesPosition={togglesPosition}
        handleChange={handleChange}
        name={'Show country in profile'}
        value={'country'}
      />
      <ProfileSettingsSwitch
        togglesPosition={togglesPosition}
        handleChange={handleChange}
        name={'Show last online in profile'}
        value={'online'}
      />
    </SwitchBoardWrapper>
  );
}

export default SwitchBoard;

const SwitchBoardWrapper = styled.div`
  margin-top: 2rem;
  background-color: #fff;
`;
