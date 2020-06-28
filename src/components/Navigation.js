import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import { navTabs } from "../constants/NavTabs";

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 15rem 3rem 15rem;
  align-items: center;
  min-height: 4rem;
  div {
    display: flex;
  }
  @media (max-width: 1100px) {
    margin: 2rem 3rem 3rem 3rem;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    margin: 2rem 0 3rem 0;
  }
`;

const NavLinks = styled(Link)`
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
  margin: 0 1rem;
  color: #000;
  ${(props) =>
    props.active &&
    css`
      border-bottom: 1.5px solid #000;
    `}
`;

const Logo = styled(Link)`
  font-family: "Permanent Marker", cursive;
  :hover {
    text-decoration: none;
  }
  font-size: 20px;
  color: #000;
  text-decoration: none;
  img {
    margin: 0 0.2rem;
  }
`;

const SearchInput = styled.input`
  border: 0;
  border-bottom: 1px solid #c0c0c0;
  outline: none;
  border-radius: 5%;
  margin-left: 1rem;
`;

const SearchIcon = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const Search = styled.div`
  display: flex;
`;

export const Navigation = ({ handlesubmit, filterPosts }) => {
  const location = useLocation();
  return (
    <ul>
      <Navbar>
        <div>
          <li>
            <Logo to='/'>
              <span>TOP</span>
              <img src='/upArrow.svg' alt='arrow' />
              <span>NEWS</span>
            </Logo>
          </li>
          <NavLinks to='/search'>
            <form onSubmit={handlesubmit}>
              <Search>
                <SearchInput
                  type='text'
                  onChange={filterPosts}
                  placeholder='Search'
                />
                <SearchIcon type='submit'>
                  <img src='/search.svg' alt='search' />
                </SearchIcon>
              </Search>
            </form>
          </NavLinks>
        </div>
        <div>
          {navTabs.map((item, index) => {
            return (
              <li key={index}>
                <NavLinks
                  active={location.pathname.includes(item.section)}
                  to={item.to}
                >
                  {item.label}
                </NavLinks>
              </li>
            );
          })}
        </div>
      </Navbar>
    </ul>
  );
};
