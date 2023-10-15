import styled from "styled-components";

export const UserListStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0px auto;
    max-width: 380px;
    padding: 20px;
    gap: 20px;
    align-items: center;
    justify-content: center;
        @media screen and (min-width: 820px) {
        max-width: 820px;
        }
        @media screen and (min-width: 1440px) {
        max-width: 1220px;
        }
`;