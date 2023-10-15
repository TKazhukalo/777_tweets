import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionHome = styled.section`
    padding-top: 188px;
    padding-bottom: 260px;
  
`;

export const ImageHome = styled.img`
    display: block;
    margin: 0 auto;
`;

export const TextHome = styled.p`
    margin-top: 20px;
    font-size: 26px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  
`
export const TextHomeLink=styled(Link)`
    text-decoration: none;
    color: #ffffff;
     &:hover{
         color: #c8a2f0;
    }
`
