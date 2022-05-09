import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useSelector, useDispatch } from "react-redux";
import { CopyOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { charaNameFixAction, charaInfoFixAction } from "../reducer/user";
import { convert } from "html-to-text";
import { copyAction } from "../reducer/copyed";
import styled from "styled-components";

export default function EditableBlock({ nowChara }) {
  // const [propData, setPropData] = useState(null)
  // if(nowSynopsis) setPropData(nowSynopsis)
  // if(nowChara) setPropData(nowChara)

  const ref = useRef();

  const dispatch = useDispatch();

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current.focus();
    }
  };

  return (
    <>
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
        <div style={{ width: "100%" }}>
          <ContentEditable
            className="eightSeven"
            html={nowChara.name.html}
            disabled={false}
            onChange={(e) =>
              dispatch(
                charaNameFixAction({ html: e.target.value }, nowChara.id)
              )
            }
            tagName="h2"
            placeholder={"무제"}
            onKeyDown={onKeyDownHandler}
          />
          <hr />
          <ContentEditable
            className="eightSeven blankText"
            html={nowChara.info.html}
            disabled={false}
            onChange={(e) =>
              dispatch(
                charaInfoFixAction({ html: e.target.value }, nowChara.id)
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
