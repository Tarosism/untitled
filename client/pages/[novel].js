import React, { useState } from "react";
import { useRouter } from "next/router";
import LoginNav from "../components/LoginNav";
import {
  MainDefault,
  LinkWrapper,
  DoingWrapper,
  IntroduceWrapper,
} from "../style/NovelMainStyle";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import styled from "styled-components";
import NovelDetail from "../components/NovelDetail";
import { NovelDoingSelect, PaddingLine } from "../style/MainStyle";
import {
  LeftOutlined,
  ContainerOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import LoginChapterList from "../components/LoginChapterList";

export default function novel() {
  const router = useRouter();
  const { novel } = router.query;
  const state = useSelector((state) => state.userReducer);
  const { me } = state;

  const nowSelect = me?.novelList.filter(
    (fill) => fill.id === Number(novel)
  )[0];

  const completedChapters = [
    { title: "2화 : 휴재", word: 1300 },
    { title: "1화 : 깐돌이의 모험", word: 1100 },
  ];
  const incompleteChapters = {
    title: "3화 : 휴재 후기",
    targetWords: 3000,
    word: 1100,
  };
  //me.novelList.map(fill) => fill.title etc...

  const [linkCount, setLinkCount] = useState(2);
  return (
    <>
      <LoginNav />
      <MainDefault>
        <br />
        <LinkWrapper>
          <div>
            {" "}
            <Link href={"/"}>
              <span className="eightSeven">
                <LeftOutlined
                  className="threeEight"
                  style={{ fontSize: "14px" }}
                />{" "}
                {me?.nickName}
              </span>
            </Link>
          </div>
          {linkCount <= 2 && <span className="threeEight">/</span>}
          <span className="eightSeven">{nowSelect?.title}</span>
        </LinkWrapper>
        <IntroduceWrapper>
          <NovelDetail nowSelect={{ html: nowSelect }} />
          <PaddingLine />
          <DoingWrapper>
            <Link href={`/${novel}/synopsisList`}>
              <NovelDoingSelect>
                <ContainerOutlined
                  style={{ fontSize: "2.5rem" }}
                  className="six"
                />
                <br />
                시놉시스
              </NovelDoingSelect>
            </Link>
            <Link href={`/${novel}/charaList`}>
              <NovelDoingSelect>
                <ContainerOutlined
                  style={{ fontSize: "2.5rem" }}
                  className="six"
                />
                <br />
                캐릭터
              </NovelDoingSelect>
            </Link>
            <Link href={`/${novel}/worldview`}>
              <NovelDoingSelect>
                <ContainerOutlined
                  style={{ fontSize: "2.5rem" }}
                  className="six"
                />
                <br />
                세계관
              </NovelDoingSelect>
            </Link>
            <Link href={`/${novel}/blank`}>
              <NovelDoingSelect>
                <ContainerOutlined
                  style={{ fontSize: "2.5rem" }}
                  className="six"
                />
                <br />
                소설쓰기
              </NovelDoingSelect>
            </Link>
          </DoingWrapper>
          <PaddingLine />
          <div>
            {me?.novelList.writing && (
              <>
                <h3>작성중인 회차</h3> <br />
                <LoginChapterList incompleteChapters={incompleteChapters} />
                <PaddingLine />
              </>
            )}

            <h3>작성한 회차</h3>
            <br />
            {completedChapters.map((fill) => (
              <LoginChapterList
                chapterTitle={fill.title}
                wordCounts={fill.word}
              />
            ))}
          </div>
        </IntroduceWrapper>
      </MainDefault>
    </>
  );
}
//결국 아래에 작은 글씨 하나를 넣기는 넣어야 함. 골치아픔.. 이쪽은 일단 스킵하고
// 데이터 갖고 놀 때 다시 생각해보도록 하자 그리고 컴포넌트들 정리하셈
