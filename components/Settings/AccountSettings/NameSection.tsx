import { useState } from 'react';
import styled from 'styled-components';

function NameSection() {
  const [username, setUsername] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  return (
    <NameSectionContainer>
      <div className="username__title-container">
        <p className="username__title-text">Username</p>
      </div>
      <div className="username-input__container">
        <label htmlFor="username"></label>
        <input
          onChange={handleChange}
          value={username}
          autoComplete="off"
          minLength={6}
          maxLength={20}
          type="text"
          name="username"
          // className="categorySetterWrapper__input"
          placeholder="Enter your username"
        />
      </div>
    </NameSectionContainer>
  );
}

export default NameSection;

const NameSectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2rem 2rem 2rem;
  font-size: 1.2rem;
  background-color: #fff;
  margin-top: 2rem;

  .username-input__container {
    min-width: 50%;
  }

  input {
    all: unset;
    border-bottom: #9e9e9e 1px solid;
    min-width: 100%;
    &::placeholder {
      font-size: 1.2rem;
      color: #acacac;
    }

    &:focus {
      border-bottom: 1px #c45f55 solid;
    }
  }
`;
