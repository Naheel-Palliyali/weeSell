import styled from 'styled-components'

export const StyledNavbar = styled.ul`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  padding: 0;

  > li {
    display: inline;
    text-decoration: none;
    list-style-type: none;
    transition: 150ms;

    &:hover {
      color: #f6862b;
      cursor: pointer;
    }

    &:active {
      color: #f6862b;
      cursor: pointer;
    }
  }
`
