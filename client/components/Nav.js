import React from "react";
import Link from "next/link";
import { NavBar, NavButtonSide, NavButton } from "../style/NavStyle";

export default function Nav({ setLoginModal, setSingupModal }) {
  return (
    <NavBar>
      <Link href="/">logo</Link>
      <div>
        <NavButtonSide onClick={() => setLoginModal(true)}>
          로그인
        </NavButtonSide>
        <NavButton onClick={() => setSingupModal(true)}>가입하기</NavButton>
      </div>
    </NavBar>
  );
}
