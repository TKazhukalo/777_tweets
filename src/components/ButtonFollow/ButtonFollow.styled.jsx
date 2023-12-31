import styled from 'styled-components';

export const ButtonBurger = styled.button`
  padding: 14px 56px;
  border: none;
  background: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: 0.3s;

  &.active {
    background: #5CD3A8;
  }
`;