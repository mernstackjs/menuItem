import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Links = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/Content",
    name: "Content",
  },
];
const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
`;

const MenuList = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 700px) {
    display: none;
  }
`;
const Logo = styled.div`
  font-size: 30px;
`;
const MenuIcone = styled.div`
  font-size: 30px;
  @media (min-width: 700px) {
    display: none;
  }
`;
const ManuMobile = styled.div`
  width: 85%;
  height: 100vh;
  background-color: yellow;
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  display: ${({ isOpen }) => (isOpen ? "black" : "none")};
  @media (min-width: 700px) {
    display: none;
  }
`;
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <Logo>BrandName!</Logo>
      <MenuList>
        {Links.map((link) => {
          return <StyledLink to={link.path}>{link.name}</StyledLink>;
        })}
      </MenuList>
      <MenuIcone>
        {isOpen ? (
          <AiOutlineClose onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} />
        )}
      </MenuIcone>
      <ManuMobile isOpen={isOpen}>
        {Links.map((link) => {
          return <StyledLink to={link.path}>{link.name}</StyledLink>;
        })}
      </ManuMobile>
    </Wrapper>
  );
};

export default Navbar;
