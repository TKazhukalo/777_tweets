import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ContainerHeader, ContainerNav, HeaderItem, HeaderItemLink, HeaderList } from "./Layout.styled";
import Loader from "components/Loader/Loader";

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
}