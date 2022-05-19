import React, { useState, useEffect } from "react";
import {
  Background,
  ModalContainer,
  ModalInput,
  ExBtn,
  ExBtnWrapper,
} from "../style/ModalStyle";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../reducer/user";
import styled from "styled-components";
import { modifyDataAction } from "../reducer/etcducer";

export default function LoginModal({ setLoginModal }) {
  const dispatch = useDispatch();
  const etcState = useSelector((state) => state.etcReducer);
  const { nowWritten } = etcState;

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
      dispatch(
        loginAction({
          email,
          nickName: "taro",
          novelList: [
            {
              id: 0,
              title: { html: "깐돌이의 모험" },
              picture: "http://placeimg.com/500/500/any",
              info: { html: "깐돌이의 우당탕탕 모험기" },
              synopsis: [
                {
                  id: 0,
                  title: { html: "1화 시놉스시" },
                  text: { html: "부힛 부히힛 키시시~" },
                },
              ],
              chara: [
                {
                  id: 0,
                  title: { html: "김깐돌" },
                  text: { html: "귀염둥이 깐돌이" },
                },
              ],
              worldview: { title: { html: "" }, text: { html: "" } },
              writing: null,
              written: [
                {
                  id: 0,
                  title: { html: "1화: 깐돌스의 모험" },
                  text: { html: "몰?루" },
                },
              ],
            },
            {
              id: 1,
              title: { html: "깐돌이의 모험 remaster" },
              picture: "http://placeimg.com/500/500/arch",
              info: {
                html: "새로운 그래픽으로 태어난 깐돌이의 우당탕탕 모험기",
              },
              synopsis: [
                {
                  id: 0,
                  title: { html: "프롤로그 시놉스시" },
                  text: { html: "우효~~~ 겟또다제~" },
                },
                {
                  id: 1,
                  title: { html: "1화 시놉스시" },
                  text: { html: "헤헤헿" },
                },
              ],
              chara: [
                {
                  id: 0,
                  title: { html: "김깐돌" },
                  text: { html: "버전업된 귀염둥이 깐돌이" },
                },
                {
                  id: 1,
                  title: { html: "고귀한 막시무스 1세" },
                  text: { html: "그는 고귀했습니다" },
                },
              ],
              worldview: {
                title: { html: "업그레이드" },
                text: { html: "니나노" },
              },
              writing: {
                id: 2,
                title: { html: "2화: 휴재" },
                text: { html: "무야홍" },
              },
              written: [
                {
                  id: 0,
                  title: { html: "1화: 리마스터의 모험" },
                  text: { html: "몰?루" },
                },
                {
                  id: 1,
                  title: { html: "1.2화: 분량조절 실패" },
                  text: { html: "꿀루asdadadadadadadadasdadadada" },
                },
              ],
            },
          ],
          record: { words: 12, charaCounts: 1, chapters: 1 },
          modify: null,
        })
      );
    }
    setLoginModal(false);
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
