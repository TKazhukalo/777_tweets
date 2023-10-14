import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { ContainerHeader, ContainerNav, HeaderItem, HeaderItemLink, HeaderList } from "./Layout.styled";
import { useState } from "react";

export const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    blockScroll();
  };

  const blockScroll = () => {
    const bodyEl = document.querySelector('body');
    const displayWith = window.innerWidth;

    if (displayWith < 768) {
      bodyEl.classList.toggle('block_scroll');
    }
  };
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