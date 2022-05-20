import styled from "styled-components";

export const NavBar = styled.div`
  background-color: #282828;
  height: 80px;
  padding: 0 278px;
  position: sticky;
  top: 0;
  @media ${(props) => props.theme.laptop} {
    padding: 0 250px;
  }
  @media ${(props) => props.theme.tabletL} {
    padding: 0 210px;
  }
  @media ${(props) => props.theme.tabletM} {
    padding: 0 200px;
  }
  @media ${(props) => props.theme.tabletS} {
    padding: 0 180px;
  }
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
