import React, { useState, useEffect } from "react";
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
import NovelDetail from "../components/NovelDetail";
import { NovelDoingSelect, PaddingLine } from "../style/MainStyle";
import { LeftOutlined, ContainerOutlined } from "@ant-design/icons";
import LoginChapterList from "../components/LoginChapterList";
import { updateNowSelectAction, addBlankAction } from "../reducer/user";

export default function novel() {
  const router = useRouter();
  const { novel } = router.query;
  const state = useSelector((state) => state.userReducer);
  const { me, nowSelect } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    const nowSelect = me?.novelList.filter(
      (fill) => fill.id === Number(novel)
    )[0];
    dispatch(updateNowSelectAction(nowSelect));
  }, [novel]);
  const novelIdx = me?.novelList.findIndex((fill) => fill.id === Number(novel));
  const [linkCount, setLinkCount] = useState(2);

  const addBlank = () => {
    dispatch(addBlankAction());
    router.push(`/${novel}/blank`);
  };

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
          <span className="eightSeven">{nowSelect?.title.html}</span>
        </LinkWrapper>
        <IntroduceWrapper>
          <NovelDetail />
          <PaddingLine />
          <div>
            {me?.novelList[novelIdx].writing && (
              <>
                <h3>작성중인 회차</h3> <br />
                <LoginChapterList
                  incompleteChapters={me?.novelList[novelIdx].writing}
                />
                <PaddingLine />
              </>
            )}
          </div>
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
            <div onClick={addBlank}>
              <NovelDoingSelect>
                <ContainerOutlined
                  style={{ fontSize: "2.5rem" }}
                  className="six"
                />
                <br />
                소설쓰기
              </NovelDoingSelect>
            </div>
          </DoingWrapper>
          <PaddingLine />

          <div>
            <h3>작성한 회차</h3>
            <br />
            {me?.novelList[novelIdx].written
              .slice(0)
              .reverse()
              .map((fill) => (
                <LoginChapterList
                  chapterTitle={fill.title.html}
                  wordCounts={fill.text.html}
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
