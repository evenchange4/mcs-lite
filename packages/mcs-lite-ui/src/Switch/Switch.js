import styled from 'styled-components';
import { color } from '../defaultTheme';

const Switch = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  width: 82px;
  box-sizing: border-box;
  background-color: ${props => props.checked ? props.onColor : props.offColor};
  border-radius: 24px;
  align-items: center;
  transition: background-color cubic-bezier(0.47, 0, 0.75, 0.72) 0.2s;
  cursor: pointer;

  &::after {
    content: " ";
    position: absolute;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: ${color.white};
    cursor: pointer;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.17);
    left: ${props => props.checked ? '32px' : 0};
    transition: left cubic-bezier(0.47, 0, 0.75, 0.72) 0.2s;
    margin: 0 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

Switch.defaultProps = {
  onColor: color.success,
  offColor: color.grayBase,
  checked: false,
};

export default Switch;