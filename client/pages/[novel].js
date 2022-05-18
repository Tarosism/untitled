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
import styled from "styled-components";

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
    if (me?.novelList[novelIdx].writing) {
      setWritingAlert("opa100");
    } else {
      dispatch(addBlankAction());
      router.push(`/${novel}/blank`);
    }
  };

  const writingRouterHandle = () => router.push(`/${novel}/blank`);

  const viewmodHandler = (fill) => router.push(`/${novel}/written/${fill.id}`);

  const [writingAlert, setWritingAlert] = useState("opa0");
  const alertHandler = () => {
    setWritingAlert("opa0");
    dispatch(addBlankAction());
    router.push(`/${novel}/blank`);
  };

  return (
    <>
      <LoginNav />
      <MainDefault>
        <WritingAlert className={writingAlert}>
          작성 중인 회차가 있습니다. <br />
          저장하고 새 회차를 시작하시겠어요?
          <WritingAlertBtnWrapper>
            <No onClick={() => setWritingAlert("opa0")}>잠시만요</No>
            <Yes onClick={alertHandler}>네</Yes>
          </WritingAlertBtnWrapper>
        </WritingAlert>
        <br />
        <LinkWrapper>
          <div>
            {" "}
            <Link href={"/"}>
              <span className="eightSeven">
                <LeftOutlined className="threeEight font14" /> {me?.nickName}
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
                <div onClick={writingRouterHandle}>
                  <LoginChapterList
                    incompleteChapters={me?.novelList[novelIdx].writing}
                  />
                </div>
                <PaddingLine />
              </>
            )}
          </div>
          <DoingWrapper>
            <Link href={`/${novel}/synopsisList`}>
              <NovelDoingSelect>
                <ContainerOutlined className="six font2dot5rem" />
                <br />
                시놉시스
              </NovelDoingSelect>
            </Link>
            <Link href={`/${novel}/charaList`}>
              <NovelDoingSelect>
                <ContainerOutlined className="six font2dot5rem" />
                <br />
                캐릭터
              </NovelDoingSelect>
            </Link>
            <Link href={`/${novel}/worldview`}>
              <NovelDoingSelect>
                <ContainerOutlined className="six font2dot5rem" />
                <br />
                세계관
              </NovelDoingSelect>
            </Link>
            <div onClick={addBlank}>
              <NovelDoingSelect>
                <ContainerOutlined className="six font2dot5rem" />
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
                <div onClick={() => viewmodHandler(fill)}>
                  <LoginChapterList
                    chapterTitle={fill.title.html}
                    wordCounts={fill.text.html}
                  />
                </div>
              ))}
          </div>
        </IntroduceWrapper>
      </MainDefault>
    </>
  );
}
//결국 아래에 작은 글씨 하나를 넣기는 넣어야 함. 골치아픔.. 이쪽은 일단 스킵하고
// 데이터 갖고 놀 때 다시 생각해보도록 하자 그리고 컴포넌트들 정리하셈
const WritingAlert = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  /* display: grid; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem 1.5rem;
  background: #282828;
  border-radius: 10px;
  text-align: center;
  z-index: 21;
  color: rgba(255, 255, 255, 87%);
  line-height: 1.5rem;
`;
const Yes = styled.button`
  width: 7rem;
  color: rgba(255, 255, 255, 87%);
  box-sizing: border-box;
  background-color: violet;
  border-radius: 5px;
  border: 2px solid violet;
  padding: 0.45em 1em;
  font-weight: 700;
`;
const No = styled.button`
  width: 7rem;
  color: rgba(255, 255, 255, 60%);
  box-sizing: border-box;
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 60%);
  padding: 0.45em 1em;
  font-weight: 700;
`;

const WritingAlertBtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
