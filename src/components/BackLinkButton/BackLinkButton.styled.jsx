import styled from 'styled-components';
import { FaArrowCircleLeft } from "react-icons/fa";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px auto 0px 50px;
    padding: 10px 20px;
    background-color: #5736a3;
    border-radius: 12px;
    border: none;
    color: #ebd8ff;
        &:hover {
            background-color: #3f1f8b;
  }
`;
export const ArrowCircle = styled(FaArrowCircleLeft)`
  width: 20px;
  height: 15px;
`;