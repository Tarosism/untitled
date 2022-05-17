import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  LinkWrapperBlank,
  PaddingLine,
  BlankWrapper,
  BlackMain,
  EditableBlockWrapper,
} from "../../style/NovelMainStyle";
import EditableBlockBlank from "../../components/EditableBlockBlank";
import { useSelector, useDispatch } from "react-redux";
import { LeftOutlined } from "@ant-design/icons";
import BlankNav from "../../components/BlankNav";
import { convert } from "html-to-text";
import { copyAction } from "../../reducer/copyed";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { pageSelectAction, endBlankAction } from "../../reducer/user";
import { sidebarTargetAction } from "../../reducer/etcducer";

export default function blank() {
  const router = useRouter();
  const { novel } = router.query;

  const state = useSelector((state) => state.userReducer);
  const { me, nowSelect } = state;
  const dispatch = useDispatch();

  const [linkCount, setLinkCount] = useState(3);

  const [sideControll, setSideControll] = useState(false);

  const [writingAlert, setWritingAlert] = useState("opa0");

  const textCounts = convert(nowSelect.writing?.text.html, {
    wordwrap: 130,
  });
  const copyTextHandler = (textCounts, result) => {
    dispatch(copyAction({ value: textCounts, copied: true }));
    result && setWritingAlert("opa100");
    setTimeout(() => {
      setWritingAlert("opa0");
    }, 1500);
  };
  useEffect(() => {
    dispatch(pageSelectAction("blank"));
    dispatch(sidebarTargetAction("blank"));
  }, []);

  return (
    <>
      <CopyAlert className={`eightSeven ${writingAlert}`}>
        복사 되었습니다
      </CopyAlert>
      <BlankWrapper>
        <BlankNav setSideControll={setSideControll} />
        <BlackMain>
          <div className={sideControll ? "sideOpen" : "sideClose"}>
            <div
              style={{
                display: "flex",
                width: "30rem",
                fontSize: "14px",
                gap: "1rem",
                paddingLeft: "1rem",
              }}
            >
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
              <span className="threeEight">/</span>
              <Link href={`/${novel}`}>
                <span className="eightSeven">{nowSelect.title.html}</span>
              </Link>
              {linkCount > 2 && (
                <>
                  <span className="threeEight">/</span>
                  <span className="eightSeven">
                    {nowSelect?.writing?.title?.html}
                  </span>
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
                <p className="six">{textCounts.length} 자</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <CopyToClipboard
                  text={textCounts}
                  onCopy={(textCounts, result) =>
                    copyTextHandler(textCounts, result)
                  }
                >
                  <span
                    className="six"
                    style={{
                      fontSize: "1rem",
                      cursor: "pointer",
                      padding: "0.25rem",
                      border: "1px solid rgba(255,255,255, 60%)",
                      borderRadius: "20%",
                    }}
                  >
                    복사
                  </span>
                </CopyToClipboard>
                <span
                  className="six"
                  style={{
                    fontSize: "1rem",
                    padding: "0.25rem",
                    border: "1px solid rgba(255,255,255, 60%)",
                    borderRadius: "20%",
                  }}
                  onClick={() => {
                    const { id } = nowSelect.writing;
                    dispatch(endBlankAction());
                    router.push(`/${novel}/written/${id}`);
                  }}
                >
                  완료
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  padding: "0 1rem 1rem 1rem",
                }}
              ></div>
            </div>
          </div>

          <EditableBlockWrapper>
            <PaddingLine />
            <EditableBlockBlank
              nowBlank={nowSelect.writing}
              sideControll={sideControll}
            />
          </EditableBlockWrapper>
        </BlackMain>
      </BlankWrapper>
    </>
  );
}

const CopyAlert = styled.div`
  width: 10rem;
  height: 5rem;
  background-color: #282828;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  border-radius: 3rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 70%);
`;
