import styled from 'styled-components'

export const Container = styled.div`
  display: ${(props) => props.display || 'flex'};
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: ${(props) => (props.center ? 'center' : 'space-between')};
  align-items: center;

  height: ${(props) => props.height || null};
  width: ${(props) => props.width || null};
  position: relative;
  top: ${(props) => props.top || null};
  bottom: ${(props) => props.bottom || null};
  left: ${(props) => props.left || null};
  right: ${(props) => props.right || null};
  margin: ${(props) => props.margin || 0};
`

export const ContainerFloatX = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  height: ${(props) => props.height || null};
  width: ${(props) => props.width || null};
  padding: 8px;
  position: absolute;
  top: ${(props) => props.top || null};
  bottom: ${(props) => props.bottom || null};
  left: ${(props) => (props.center ? '50%' : props.left || null)};
  right: ${(props) => props.right || null};

  transform: ${(props) => (props.center ? 'translate(-50%)' : null)};
`
