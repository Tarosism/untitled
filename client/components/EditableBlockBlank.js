import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useSelector, useDispatch } from "react-redux";
import { blankNameAction, blankTextAction } from "../reducer/user";
import { CopyOutlined } from "@ant-design/icons";
import { convert } from "html-to-text";
import { copyAction } from "../reducer/copyed";
import { CopyToClipboard } from "react-copy-to-clipboard";

import styled from "styled-components";

export default function EditableBlock({ nowBlank }) {
  const ref = useRef();

  const [copyModal, setCopyModal] = useState(false);
  const dispatch = useDispatch();

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current.focus();
    }
  };

  const textCounts = convert(nowBlank?.text.html, {
    wordwrap: 130,
  });
  const copyTextHandler = (textCounts, result) => {
    dispatch(copyAction({ value: textCounts, copied: true }));
    result && setCopyModal(true);
    setTimeout(() => {
      setCopyModal(false);
    }, 2500);
  };

  return (
    <>
      {copyModal && (
        <CopyAlert className="eightSeven">복사 되었습니다</CopyAlert>
      )}
      <div
        style={{
          width: "31.25rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "0 1rem 1rem 1rem",
          }}
        ></div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <CopyToClipboard
            text={textCounts}
            onCopy={(textCounts, result) => copyTextHandler(textCounts, result)}
          >
            <CopyOutlined
              className="eightSeven"
              style={{
                fontSize: "1.5rem",
                cursor: "pointer",
                padding: "0.25rem",
                border: "1px solid rgba(255,255,255, 60%)",
                borderRadius: "20%",
                textAlign: "end",
              }}
            />
          </CopyToClipboard>
        </div>
        <div style={{ width: "100%" }}>
          <ContentEditable
            className="eightSeven"
            html={nowBlank.title.html}
            disabled={false}
            onChange={(e) =>
              dispatch(blankNameAction({ html: e.target.value }))
            }
            tagName="h2"
            placeholder={"무제"}
            onKeyDown={onKeyDownHandler}
          />
          <hr />
          <ContentEditable
            className="eightSeven blankText"
            html={nowBlank.text.html}
            disabled={false}
            onChange={(e) =>
              dispatch(blankTextAction({ html: e.target.value }))
            }
            tagName="div"
            placeholder={"마음껏 보여주세요!"}
            innerRef={ref}
          />
        </div>
      </div>
    </>
  );
}

const CopyAlert = styled.div`
  width: 10rem;
  height: 5rem;
  background-color: #282828;
  position: absolute;
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
//저장을 html 객체로 함 -> 불러올 때 고대로 가져와서 contentEditable html에 넣음
//결국 저 태그로만 저장하고 불러올 수 있는 애들임
