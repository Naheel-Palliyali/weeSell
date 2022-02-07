import styled from 'styled-components'

export const StyledBanner = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #f9c00e;
  border-radius: 72px;

  position: absolute;
  z-index: -10;
  overflow: hidden;

  font-size: 1.5rem;

  @media screen and (max-width: 1366px) {
    font-size: 1rem;
    border-radius: 48px;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.4rem;
    border-radius: 16px;
  }

  &::before {
    content: 'O';
    font-size: 50em;
    color: orange;
    position: absolute;
    top: -140%;
    left: 50%;
    transform: translate(-50%);

    color: transparent;
    text-shadow: 0 0 100px rgba(240, 140, 40, 0.5);
  }
  &::after {
    content: 'O';
    font-size: 110em;
    color: orange;
    position: absolute;
    top: -300%;
    left: 50%;
    transform: translate(-50%);

    color: transparent;
    text-shadow: 0 0 100px rgba(240, 140, 40, 0.5);
  }
`
