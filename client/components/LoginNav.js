import React from "react";
import Link from "next/link";
import { NavBar, NavLogoutButton } from "../style/NavStyle";
import styled from "styled-components";

export default function LoginNav({ setLoginState }) {
  return (
    <NavBar>
      <NavBarInner>
        <Link href="/">logo</Link>
        <div>
          <NavLogoutButton onClick={() => setLoginState(false)}>
            로그아웃
          </NavLogoutButton>
        </div>
      </NavBarInner>
    </NavBar>
  );
}

const NavBarInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;
