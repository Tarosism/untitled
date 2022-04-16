import React from "react";
import Link from "next/link";
import { NavBar, NavLogoutButton } from "../style/NavStyle";

export default function LoginNav({ setLoginState }) {
  return (
    <NavBar>
      <Link href="/">logo</Link>
      <div>
        <NavLogoutButton onClick={() => setLoginState(false)}>
          로그아웃
        </NavLogoutButton>
      </div>
    </NavBar>
  );
}
