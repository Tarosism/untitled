import React, { useState } from "react";
import { useRouter } from "next/router";
import LoginNav from "../components/LoginNav";
import { MainDefault } from "../style/NovelMainStyle";
import Link from "next/link";
import styled from "styled-components";
import NovelDetail from "../components/NovelDetail";
import { NovelDoingSelect, PaddingLine } from "../style/MainStyle";
import { LeftOutlined, ContainerOutlined } from "@ant-design/icons";

export default function novel() {
  const router = useRouter();
  const { novel } = router.query;

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
                양승준
              </span>
            </Link>
          </div>
          {linkCount <= 2 && <span className="threeEight">/</span>}
          <span className="eightSeven">{novel}</span>
        </LinkWrapper>
        <IntroduceWrapper>
          <NovelDetail />
          <PaddingLine />
          <DoingWrapper>
            <NovelDoingSelect>
              <ContainerOutlined
                style={{ fontSize: "2.5rem" }}
                className="six"
              />
              <br />
              시놉시스
            </NovelDoingSelect>
            <NovelDoingSelect>
              <ContainerOutlined
                style={{ fontSize: "2.5rem" }}
                className="six"
              />
              <br />
              캐릭터
            </NovelDoingSelect>
            <NovelDoingSelect>
              <ContainerOutlined
                style={{ fontSize: "2.5rem" }}
                className="six"
              />
              <br />
              세계관
            </NovelDoingSelect>
            <NovelDoingSelect>
              <ContainerOutlined
                style={{ fontSize: "2.5rem" }}
                className="six"
              />
              <br />
              소설쓰기
            </NovelDoingSelect>
          </DoingWrapper>
          <PaddingLine />
          <div>
            <div>
              <h3>작성중인 회차</h3>
              <br />
              <NovelListWrapper>
                <img
                  src="http://placeimg.com/190/130/any"
                  style={{ marginRight: "2rem" }}
                />
                <NovelList>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <h3>title</h3> <sapn className="six">1400/1500</sapn>
                  </div>
                </NovelList>
              </NovelListWrapper>
            </div>
            <PaddingLine />
            <div>
              <h3>작품 회차</h3>
              <br />
              <NovelListWrapper>
                <img
                  src="http://placeimg.com/190/130/any"
                  style={{ marginRight: "2rem" }}
                />
                <NovelList>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <h3>title</h3> <sapn className="six">1400/1500</sapn>
                  </div>
                </NovelList>
              </NovelListWrapper>
            </div>
          </div>
        </IntroduceWrapper>
      </MainDefault>
    </>
  );
}
//결국 아래에 작은 글씨 하나를 넣기는 넣어야 함. 골치아픔.. 이쪽은 일단 스킵하고
// 데이터 갖고 놀 때 다시 생각해보도록 하자 그리고 컴포넌트들 정리하셈
const LinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const DoingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IntroduceWrapper = styled.div`
  display: grid;
`;

const NovelListWrapper = styled.div`
  display: flex;
  border-top: 1px solid rgba(255, 255, 255, 0.38);
  border-bottom: 1px solid rgba(255, 255, 255, 0.38);
`;
const NovelList = styled.div`
  display: flex;
`;
