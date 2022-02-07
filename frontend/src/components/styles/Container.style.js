import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  position: relative;
  margin: ${(props) => props.margin || 0};
`

export const ContainerFloatX = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  padding: 8px;
  position: absolute;
  top: ${(props) => props.top || null};
  bottom: ${(props) => props.bottom || null};
  left: ${(props) => (props.center ? '50%' : props.left || null)};
  right: ${(props) => props.right || null};

  transform: ${(props) => (props.center ? 'translate(-50%)' : null)};
`
