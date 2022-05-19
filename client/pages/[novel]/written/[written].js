import React, { useState, useEffect } from "react";
import {
  LinkWrapperBlank,
  PaddingLine,
  BlankWrapper,
  BlackMain,
  EditableBlockWrapper,
} from "../../../style/NovelMainStyle";
import Link from "next/link";
import { useRouter } from "next/router";
import EditableBlockModify from "../../../components/EditableBlockModify";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { modifyAction } from "../../../reducer/user";
import {
  nowWrittenAction,
  modifyDisableAction,
} from "../../../reducer/etcducer";
import { SideLinkWrapper } from "../../../components/LinkWrap";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Beforeunload, useBeforeunload } from "react-beforeunload";

export default function written() {
  const router = useRouter();
  const { novel, written } = router.query;

  const [linkCount, setLinkCount] = useState(3);

  const state = useSelector((state) => state.userReducer);
  const etcState = useSelector((state) => state.etcReducer);
  const { me, nowSelect } = state;
  const { nowWritten } = etcState;
  const dispatch = useDispatch();

  const [disable, setDisable] = useState(true);

  const [idx, setIdx] = useState(
    nowSelect.written.findIndex((fill) => fill.id === Number(written))
  );
  useEffect(() => {
    dispatch(nowWrittenAction(nowSelect.written[idx]));
  }, [disable]);

  const [modifyData, setModifyData] = useState(nowSelect.written[idx]);

  const prevHandler = () => {
    setModifyData(nowSelect.written[idx - 1]);
    dispatch(nowWrittenAction(nowSelect.written[idx - 1]));
    setIdx((prev) => prev - 1);
    router.push(`/${novel}/written/${nowWritten.id}`);
  };
  const nextHandler = () => {
    setModifyData(nowSelect.written[idx + 1]);
    dispatch(nowWrittenAction(nowSelect.written[idx + 1]));
    setIdx((prev) => prev + 1);
    router.push(`/${novel}/written/${nowWritten.id}`);
  };

  const modifyHandler = () => {
    setDisable(false);
  };
  const endModifyHandler = () => {
    dispatch(modifyAction(idx, modifyData));
    setDisable(true);
  };

  const [unload, setUnload] = useState(false);
  //const unloadHandler = () =>
  useBeforeunload((e) => !disable && e.preventDefault());
  //이걸 어떻게 써먹어야 할지 감도 안 잡힌다
  return (
    <>
      <BlankWrapper>
        <BlackMain>
          <LinkWrapperBlank>
            <SideLinkWrapper>
              <div>
                {" "}
                <Link href={"/"}>
                  <span className="eightSeven" onClick={() => console.log("a")}>
                    <LeftOutlined
                      className="threeEight"
                      style={{ fontSize: "14px" }}
                    />{" "}
                    {me?.nickName}
                  </span>
                </Link>
              </div>
              <span className="threeEight">/</span>
              <Link href={`/${novel}`}>
                <span className="eightSeven">{nowSelect.title.html}</span>
              </Link>
              {linkCount > 2 && (
                <>
                  <span className="threeEight">/</span>
                  <span className="eightSeven">{nowWritten?.title?.html}</span>
                </>
              )}
            </SideLinkWrapper>
            <ModifyBtnWrapper>
              <div style={{ textAlign: "end" }}>
                {/* <p className="six">{textCounts.length} 자</p> */}
              </div>
              <ModifyBtnInner>
                {disable ? (
                  <ModifyBtn className="six" onClick={modifyHandler}>
                    수정
                  </ModifyBtn>
                ) : (
                  <ModifyBtnEnd className="six" onClick={endModifyHandler}>
                    완료
                  </ModifyBtnEnd>
                )}
              </ModifyBtnInner>

              <div className="flexEnd paddingZOOO"></div>
            </ModifyBtnWrapper>
          </LinkWrapperBlank>

          <EditableBlockWrapper>
            <PaddingLine />
            <PaddingLine />
            {idx === 0 || !disable ? (
              <></>
            ) : (
              <LeftOutline className="six" onClick={prevHandler} />
            )}

            <EditableBlockModify
              modifyData={modifyData}
              setModifyData={setModifyData}
              disable={disable}
            />
            {idx === nowSelect.written.length - 1 || !disable ? (
              <></>
            ) : (
              <RightOutline className="six" onClick={nextHandler} />
            )}
          </EditableBlockWrapper>
        </BlackMain>
      </BlankWrapper>
    </>
  );
}
const LeftOutline = styled(LeftOutlined)`
  position: fixed;
  top: 50%;
  left: 25%;
  font-size: 2.5rem;
`;
const RightOutline = styled(RightOutlined)`
  position: fixed;
  top: 50%;
  right: 25%;
  font-size: 2.5rem;
`;
const ModifyBtnWrapper = styled.div`
  display: flex;
  font-size: 14px;
  gap: 1rem;
  align-items: center;
`;

const ModifyBtnInner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const ModifyBtn = styled.span`
  font-size: 1rem;
  padding: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 60%);
  border-radius: 20%;
  background-color: transparent;
`;
const ModifyBtnEnd = styled.span`
  font-size: 1rem;
  padding: 0.25rem;
  border-radius: 20%;
  background-color: violet;
`;
