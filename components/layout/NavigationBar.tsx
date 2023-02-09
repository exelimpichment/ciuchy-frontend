import styled from 'styled-components';

function NavigationBar() {
  return (
    <Wrapper>
      <div className="navbar-container">test</div>
    </Wrapper>
  );
}

export default NavigationBar;

const Wrapper = styled.div`
  padding: 0 20px 0 20px;

  .navbar-container {
    max-width: var(--websiteWidth);
    margin: auto;
    height: 55px;
  }
`;
