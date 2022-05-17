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
  modifyDataAction,
  nowWrittenAction,
  modifyDisableAction,
} from "../../../reducer/etcducer";

import { useSelector, useDispatch } from "react-redux";

export default function written() {
  const router = useRouter();
  const { novel, written } = router.query;

  const [linkCount, setLinkCount] = useState(3);

  const state = useSelector((state) => state.userReducer);
  const etcState = useSelector((state) => state.etcReducer);
  const { me, nowSelect } = state;
  const { modifyData, nowWritten, disable } = etcState;
  const dispatch = useDispatch();

  const [idx, setIdx] = useState(
    nowSelect.written.findIndex((fill) => fill.id === Number(written))
  );

  useEffect(() => {
    dispatch(nowWrittenAction(nowSelect.written[idx]));
  }, [disable]);

  const prevHandler = () => {
    dispatch(nowWrittenAction(nowSelect.written[idx - 1]));
    setIdx((prev) => prev - 1);
    router.push(`/${novel}/written/${nowWritten.id}`);
  };
  const nextHandler = () => {
    dispatch(nowWrittenAction(nowSelect.written[idx + 1]));
    setIdx((prev) => prev + 1);
    router.push(`/${novel}/written/${nowWritten.id}`);
  };

  const modifyHandler = () => {
    dispatch(modifyDisableAction());
    dispatch(modifyDataAction(nowWritten));
  };
  const endModifyHandler = () => {
    dispatch(modifyDataAction(null));
    dispatch(modifyAction(idx, modifyData));
    dispatch(modifyDisableAction());
  };
  return (
    <>
      <BlankWrapper>
        <BlackMain>
          <LinkWrapperBlank>
            <div
              style={{
                display: "flex",
                width: "30rem",
                fontSize: "14px",
                gap: "1rem",
              }}
            >
              <div style={{ marginLeft: "1rem" }}>
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
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "14px",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <div style={{ textAlign: "end" }}>
                {/* <p className="six">{textCounts.length} 자</p> */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                {disable ? (
                  <span
                    className="six"
                    style={{
                      fontSize: "1rem",
                      padding: "0.25rem",
                      border: "1px solid rgba(255,255,255, 60%)",
                      borderRadius: "20%",
                    }}
                    onClick={modifyHandler}
                  >
                    수정
                  </span>
                ) : (
                  <span
                    className="six"
                    style={{
                      fontSize: "1rem",
                      padding: "0.25rem",

                      borderRadius: "20%",
                      backgroundColor: "violet",
                    }}
                    onClick={endModifyHandler}
                  >
                    완료
                  </span>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "0 1rem 1rem 1rem",
                }}
              ></div>
            </div>
          </LinkWrapperBlank>

          <EditableBlockWrapper>
            <PaddingLine />
            <PaddingLine />
            {idx === 0 || !disable ? (
              <></>
            ) : (
              <LeftOutlined
                className="six"
                style={lineLt}
                onClick={prevHandler}
              />
            )}

            <EditableBlockModify />
            {idx === nowSelect.written.length - 1 || !disable ? (
              <></>
            ) : (
              <RightOutlined
                className="six"
                style={lineRt}
                onClick={nextHandler}
              />
            )}
          </EditableBlockWrapper>
        </BlackMain>
      </BlankWrapper>
    </>
  );
}

const lineLt = {
  position: "fixed",
  top: "50%",
  left: "25%",
  fontSize: "2.5rem",
};
const lineRt = {
  position: "fixed",
  top: "50%",
  right: "25%",
  fontSize: "2.5rem",
};
