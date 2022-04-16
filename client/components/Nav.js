import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Nav() {
  return (
    <NavBar>
      <Link href="/">logo</Link>
      <div>
        <NavButtonSide>로그인</NavButtonSide>
        <NavButton>가입하기</NavButton>
      </div>
    </NavBar>
  );
}

//스타일드 컴포넌트들 코드 짧은 페이지면 굳이 나눌 필요 있어?

const NavBar = styled.div`
  background-color: tomato;
  display: flex;
  justify-content: space-between;
  height: 2rem;
  padding: 0 250px;
`;

const NavButtonSide = styled.button`
  color: white;
  box-sizing: border-box;
  background-color: transparent;
  border-radius: 5px;
  border: 2px solid violet;
  padding: 0.45em 1em;
`;

const NavButton = styled.button`
  color: white;
  box-sizing: border-box;
  background-color: violet;
  border-radius: 5px;
  border: 2px solid violet;
  padding: 0.45em 1em;
  margin-left: 15px;
`;
