import React, { useState } from "react";
import {
  Background,
  ModalContainer,
  ModalInput,
  ExBtn,
  ExBtnWrapper,
} from "../style/ModalStyle";
import styled from "styled-components";

export default function SignupModal({ setSingupModal }) {
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const [penname, setPenname] = useState("");
  const onChangePenname = (e) => {
    setPenname(e.target.value);
  };

  const [terms, setTerms] = useState(false);
  const onCheckTerms = () => {
    setTerms(() => !terms);
  };

  const signupSuccess = () => {
    if (email && password && penname !== "" && terms) {
      setSingupModal(false);
    }
  };

  return (
    <>
      <ModalContainer className="eightSeven">
        <ExBtnWrapper>
          <ExBtn onClick={() => setSingupModal(false)}>X</ExBtn>
        </ExBtnWrapper>
        <p>회원가입</p>
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
        <ModalInput
          type="text"
          placeholder="필명"
          value={penname}
          onChange={(e) => onChangePenname(e)}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: "1rem",
          }}
        >
          <label className="six">
            {" "}
            <input type="checkbox" onChange={onCheckTerms} /> 약관에 동의하는
            데수웅
          </label>
          <label className="six">
            {" "}
            <input type="checkbox" /> 이메일로 스팸메일을 보내는 데수웅 (선택)
          </label>
        </div>
        <LoginBtn htmlType="submit" onClick={signupSuccess}>
          가입하기
        </LoginBtn>
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
