import React, { useState } from "react";
import {
  Background,
  ModalContainer,
  ModalInput,
  ExBtn,
  ExBtnWrapper,
} from "../style/ModalStyle";
import styled from "styled-components";

export default function LoginModal({ setLoginModal, setLoginState }) {
  const [email, setEmail] = useState("asd");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("asd");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const loginSuccess = () => {
    if (email && password !== "") {
      setLoginModal(false);
      setLoginState(true);
    }
  };

  return (
    <>
      <ModalContainer className="eightSeven">
        <ExBtnWrapper>
          <ExBtn onClick={() => setLoginModal(false)}>X</ExBtn>
        </ExBtnWrapper>
        <p>이메일과 패스워드를 입력해주세요</p>
        <ModalInput
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => onChangeEmail(e)}
        />
        <ModalInput
          type="password"
          placeholder="패스워드"
          value={password}
          onChange={(e) => onChangePassword(e)}
        />
        <p className="forgetPass">비밀번호가 생각나지 않아요</p>
        <LoginBtn htmlType="submit" onClick={loginSuccess}>
          로그인
        </LoginBtn>
        <div className="socialLoginBox">
          소셜로그인
          <div>
            <button>구글</button>
            <button>네이버</button>
          </div>
          <p>아직 가입하지 않았다면?</p> <span>회원가입</span>
        </div>
      </ModalContainer>
      <Background />
    </>
  );
}

const LoginBtn = styled.button`
  width: 100%;
  height: 3rem;
  color: rgba(255, 255, 255, 87%);
  box-sizing: border-box;
  background-color: violet;
  border-radius: 5px;
  border: 2px solid violet;
  font-weight: 700;
`;
