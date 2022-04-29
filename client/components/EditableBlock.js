import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useSelector, useDispatch } from "react-redux";
import { CopyOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { synopsisTitleFixAction, synopsisTextFixAction } from "../reducer/user";
import { convert } from "html-to-text";
import { copyAction } from "../reducer/copyed";

export default function EditableBlock({ nowSynopsis }) {
  const ref = useRef();

  const dispatch = useDispatch();

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current.focus();
    }
  };
  const textCounts = convert(nowSynopsis.text.html, {
    wordwrap: 130,
  });
  const copyTextHandler = () => {
    dispatch(copyAction({ value: textCounts, copied: true }));
  };

  return (
    <>
      {" "}
      <div
        style={{
          width: "31.25rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ textAlign: "end" }}>
          <p className="six" style={{ margin: "0 1rem 1rem 1rem" }}>
            {textCounts.length}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            padding: "0 1rem 1rem 1rem",
          }}
        ></div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <CopyToClipboard text={textCounts} onCopy={copyTextHandler}>
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
            html={nowSynopsis.title.html}
            disabled={false}
            onChange={(e) =>
              dispatch(
                synopsisTitleFixAction({ html: e.target.value }, nowSynopsis.id)
              )
            }
            tagName="h2"
            placeholder={"무제"}
            onKeyDown={onKeyDownHandler}
          />
          <hr />
          <ContentEditable
            className="eightSeven blankText"
            html={nowSynopsis.text.html}
            disabled={false}
            onChange={(e) =>
              dispatch(
                synopsisTextFixAction({ html: e.target.value }, nowSynopsis.id)
              )
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

//저장을 html 객체로 함 -> 불러올 때 고대로 가져와서 contentEditable html에 넣음
//결국 저 태그로만 저장하고 불러올 수 있는 애들임
