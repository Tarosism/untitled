import React, { useState } from "react";
import {
  LinkWrapperBlank,
  PaddingLine,
  BlankWrapper,
  BlackMain,
  EditableBlockWrapper,
} from "../../../style/NovelMainStyle";
import BlankNav from "../../../components/BlankNav";
import Link from "next/link";
import { useRouter } from "next/router";
import EditableBlockBlank from "../../../components/EditableBlockBlank";
import { LeftOutlined } from "@ant-design/icons";

import { useSelector, useDispatch } from "react-redux";

export default function written() {
  const router = useRouter();
  const { novel, written } = router.query;

  const [linkCount, setLinkCount] = useState(3);

  const state = useSelector((state) => state.userReducer);
  const { me, nowSelect } = state;
  const dispatch = useDispatch();

  const idx = nowSelect.written.findIndex(
    (fill) => fill.id === Number(written)
  );

  const nowWritten = nowSelect.written[idx];

  return (
    <>
      <BlankWrapper>
        <BlackMain>
          <LinkWrapperBlank>
            <div
              style={{
                display: "flex",
                width: "25rem",
                fontSize: "14px",
                gap: "1rem",
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
                  <span className="eightSeven">{nowWritten.title.html}</span>
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
                <span
                  className="six"
                  style={{
                    fontSize: "1rem",
                    padding: "0.25rem",
                    border: "1px solid rgba(255,255,255, 60%)",
                    borderRadius: "20%",
                  }}
                >
                  수정
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
          </LinkWrapperBlank>

          <EditableBlockWrapper>
            <PaddingLine />
            <EditableBlockBlank nowBlank={nowWritten} disable={true} />
          </EditableBlockWrapper>
        </BlackMain>
      </BlankWrapper>
    </>
  );
}
