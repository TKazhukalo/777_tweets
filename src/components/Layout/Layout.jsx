import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ContainerHeader, ContainerNav, HeaderItem, HeaderItemLink, HeaderList } from "./Layout.styled";

export const Layout = () => {
    return <div>
            <ContainerHeader>
      <ContainerNav>
        <HeaderList>
          <HeaderItem>
            <HeaderItemLink to='/'>Home</HeaderItemLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderItemLink to='/tweets'>Tweets</HeaderItemLink>
          </HeaderItem>
          </HeaderList>
        </ContainerNav>
       
    </ContainerHeader>
        <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
}