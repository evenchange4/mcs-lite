import styled from 'styled-components';
import R from 'ramda';
import defaultTheme from '../defaultTheme';

const Card = styled.div`
  display: inline-block;
  box-sizing: border-box;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  background-color: ${R.path(['theme', 'color', 'white'])};
  border: 1px solid ${R.path(['theme', 'color', 'grayDark'])};
`;

Card.defaultProps = {
  theme: defaultTheme,
};

export default Card;
