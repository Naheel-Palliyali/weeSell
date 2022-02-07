import styled from 'styled-components'

export const Button = styled.button`
  position: relative;
  min-height: ${(props) => (props.small ? '40px' : '48px')};
  min-width: ${(props) => (props.small ? '40px' : '48px')};
  margin-left: ${(props) => (props.ml ? '16px' : 0)};
  margin-right: ${(props) => (props.mr ? '16px' : 0)};

  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  color: inherit;
  border: none;
  border-radius: 50%;
  outline: ${(props) =>
    props.small ? '1px solid rgba(255,255,255,1)' : '4px solid white'};
  box-shadow: ${(props) =>
    props.small
      ? '0px 4px 4px 0px rgba(245,170,25,0.2)'
      : '0px 4px 12px 0px #f9c00e'};
  outline-offset: -1px;

  font: inherit;
  font-weight: bolder;
  font-size: 1.4rem;
  cursor: pointer;
  transition: 150ms;

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;

    background-color: white;
    border-radius: 50%;
    opacity: 0.5;
  }

  &:hover {
    box-shadow: ${(props) => (props.small ? null : '0px 4px 12px 0px #f9c00e')};
    &::after {
      opacity: 1;
    }
  }

  &:active {
    box-shadow: ${(props) => (props.small ? null : '0px 4px 12px 0px #f9c00e')};
    transform: scale(0.95);
  }
`
