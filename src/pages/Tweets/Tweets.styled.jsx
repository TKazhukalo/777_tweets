import styled from "styled-components";


export const SectionTweets = styled.section`
//background-color:  #c8a2f0;
`;

export const Button = styled.button` 
    width: 100px;
    height: 40px;
    border: none;
    margin-top:20px;
    margin-bottom: 20px;
    border-radius:8px;
    font-size:16px;
    font-family:'Comfortaa', cursive;
    cursor: pointer;
    color: black;
    background-color: #f18eea;
        &:hover
         {
   
            background-color: #5CD3A8;
            box-shadow: 0 0 0 1px #5CD3A8, 0 0 10px #333;
        }
`;
export const ListTweets = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  row-gap: 50px;
`;