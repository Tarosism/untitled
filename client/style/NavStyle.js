import styled from "styled-components";

export const NavBar = styled.div`
  background-color: #282828;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 278px;
`;

export const NavButtonSide = styled.button`
  color: rgba(255, 255, 255, 87%);
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid rgba(255, 255, 255, 87%);
  padding: 0.45em 1em;
`;

export const NavButton = styled.button`
  color: rgba(255, 255, 255, 87%);
  box-sizing: border-box;
  background-color: violet;
  border-radius: 5px;
  border: 2px solid violet;
  padding: 0.45em 1em;
  margin-left: 15px;
  font-weight: 700;
`;

export const NavLogoutButton = styled.button`
  color: rgba(255, 255, 255, 60%);
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid violet;
  padding: 0.45em 1em;
  border: 2px solid rgba(255, 255, 255, 60%);
`;
