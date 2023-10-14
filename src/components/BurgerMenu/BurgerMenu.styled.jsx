import styled from "styled-components";
import PropTypes from 'prop-types';

export const ButtonBurger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  width: 20px;
  height: 16px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: #000;
  transition: transform 0.3s, opacity 0.3s;

  ${(props) =>
    props.isMenuOpen &&
    css`
      transform: rotate(45deg);
      opacity: 0;
    `}
`;

export const LineTop = styled(Line)`
  transform-origin: left center;
`;

export const LineCenter = styled(Line)`
  margin: 4px 0;
  opacity: ${(props) => (props.isMenuOpen ? 0 : 1)};
`;

export const LineBottom = styled(Line)`
  transform-origin: left center;
`;