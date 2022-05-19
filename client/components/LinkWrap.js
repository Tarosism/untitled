import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

export default function LinkWrap({ props, linkCount }) {
  const router = useRouter();
  const { novel } = router.query;
  const state = useSelector((state) => state.userReducer);
  const { me, nowSelect } = state;
  const etcState = useSelector((state) => state.etcReducer);
  const { target, sideControll } = etcState;

  return (
    <>
      <div className={sideControll ? "sideOpen" : "sideClose"}>
        <SideLinkWrapper>
          <div>
            {" "}
            <Link href={"/"}>
              <span className="eightSeven">
                <LeftOutlined className="threeEight font14" /> {me?.nickName}
              </span>
            </Link>
          </div>
          <span className="threeEight">/</span>
          <Link href={`/${novel}`}>
            <span className="eightSeven">{nowSelect.title.html}</span>
          </Link>
          {linkCount > 2 && (
            <>
              {target === "synopsis" && (
                <>
                  <span className="threeEight">/</span>
                  <Link href={`/${novel}/synopsisList`}>
                    <span className="eightSeven">시놉시스</span>
                  </Link>
                </>
              )}
              {target === "chara" && (
                <>
                  <span className="threeEight">/</span>
                  <Link href={`/${novel}/charaList`}>
                    <span className="eightSeven">캐릭터</span>
                  </Link>
                </>
              )}
              <span className="threeEight">/</span>
              <span className="eightSeven">{props?.title?.html}</span>
            </>
          )}
        </SideLinkWrapper>
      </div>
    </>
  );
}

export const SideLinkWrapper = styled.div`
  display: flex;
  width: 30rem;
  font-size: 14px;
  gap: 1rem;
  padding-left: 1rem;
`;
