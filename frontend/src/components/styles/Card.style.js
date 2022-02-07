import styled from 'styled-components'

export const StyledCard = styled.div`
  min-width: 320px;
  min-height: 480px;
  flex: 1;
  margin: 24px;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 32px 48px 0 rgba(250, 100, 0, 0.1);
  backdrop-filter: blur(32px);
  border-radius: 48px;
  transition: all 0.2s ease-in-out;
  outline: 2px solid white;
  color: #453f9c;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
  &:active {
    transform: scale(0.98);
  }
`
