import Link from "next/link";
import React, { useState } from "react";
import {
  MainDefault,
  TextCenter,
  PaddingLine,
  NovelListAdd,
} from "../style/MainStyle";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import LoginMainRecord from "./LoginMainRecord";

export default function LoginMain() {
  const count = [
    { title: "깐돌이의 모험", picture: "http://placeimg.com/640/480/tech" },
    { title: "깐돌이의 위험2", picture: "http://placeimg.com/640/480/people" },
    { title: "나의계절", picture: "http://placeimg.com/640/480/animals" },
    { title: "대왕카스테라", picture: "http://placeimg.com/640/480/arch" },
    { title: "운수나쁜날", picture: "http://placeimg.com/640/480/nature" },
  ];
  //4개를 기준점으로 둬야 함. 한 줄에 4개씩만 들어갈 수 있도록

  return (
    <>
      <MainDefault>
        <PaddingLine />
        <h2 style={{ fontWeight: "bold" }}>필명들어감 님,</h2> <br />
        <p className="eightSeven">오늘은 또 어떤 이야기를 들려주실 건가요?</p>
        <PaddingLine />
        <NovelListWrapper>
          {count.map((fill) => (
            <Link href={`/${fill.title}`}>
              <NovelList pic={fill.picture}>
                <span>{fill.title}</span>
              </NovelList>
            </Link>
          ))}
          <NovelListAdd>
            <PlusCircleOutlined
              style={{ color: "rgba(255, 255, 255, .38)", fontSize: "2rem" }}
            />
          </NovelListAdd>
        </NovelListWrapper>
        <PaddingLine />
        <h3>님의 기록들</h3>
        <LoginMainRecord />
      </MainDefault>
    </>
  );
}

//이런 식으로 next Link를 스타일드 컴포넌트로 사용 가능함
const NovelListWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 15rem);
  justify-content: space-between;
  gap: 5rem 50px;
`;
//지금 프로젝트에선 일일히 창크기대로 반응형을 설정해줘야 함.
//노션의 경우는 repeat(auto-fill, minmax())로 창에 따라 그리드 설정이 가능하나..
//그렇게 할 시에 space-between이 안 먹음
//그나마 다행히 gap 가로축을 넓히는 방법으로 당장 f12를 눌렀을 때 칸이 벌어지는
//효과는 낼 수 있음 어휴 다행

const NovelList = styled.div`
  /*왜인지는 모르겠으나, props를 통해 mapping된 이미지를 받으려고 할 때
  props로 들어온 녀석은 객체로 수많은 요소들을 갖는다. 그래서 저렇게 인자의
  props = something.props 이런 식으로 짚어줘야 함. props가 콘솔로그 찍히니 찍어보도록*/
  width: 15rem;
  height: 15rem;
  border-radius: 15%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.86);
  cursor: pointer;
  // 글자는 살리면서 backimg에 블러 넣는 방법. 걍 외우셈
  &::after {
    content: "";
    width: 15rem;
    height: 15rem;
    border-radius: 15%;
    position: absolute;
    background-image: url(${(el) => el.pic});
    z-index: -1;
    filter: brightness(0.5);
  }
`;
