import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import styled from 'styled-components';

function BirthSection() {
  const [value, setValue] = useState<Dayjs | null>(dayjs('1996-09-19'));
  console.log(value && value.format('YYYY-MM-DD'));

  const theme = createTheme({
    palette: {
      primary: {
        main: '#c45f55',
      },
    },
    typography: {
      body1: {
        fontSize: '1.2rem',
        fontFamily: 'sans-serif',
      },
    },
  });
  console.log(theme);

  return (
    <BirthSectionWrapper>
      <div className="birth-section__text-inner">
        <p className="birth-section__text">Date of birth</p>
      </div>
      <div className="language-section__selector-container">
        <ThemeProvider theme={theme}>
          <StyledDatePicker
            value={value}
            onChange={(newValue) => setValue(newValue as Dayjs | null)}
          />
        </ThemeProvider>
      </div>
    </BirthSectionWrapper>
  );
}

export default BirthSection;

const BirthSectionWrapper = styled.div`
  border-top: 1px solid #e0e0e0;
  background-color: #fff;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  .language-section__selector-container {
    min-width: 50%;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
`;
