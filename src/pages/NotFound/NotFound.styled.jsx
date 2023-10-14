import { Link } from "react-router-dom";
import styled from "styled-components";

 export const NotFoundImage = styled.img`
  width: 160px;
  padding-left: 10px;
  display:block;
  @media (min-width: 768px) {
    width: 500px;

  }
`;
export const Section = styled.section`
  padding-top: 188px;
  padding-bottom: 260px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorHomeLink=styled(Link)`
  text-decoration:none;
 text-align:center;
  color: white;
  font-size:26px;
  margin-bottom: 20px;

`

