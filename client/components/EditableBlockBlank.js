import React, { useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
import { useDispatch } from "react-redux";
import { blankNameAction, blankTextAction } from "../reducer/user";
import { EditBlockWrapper } from "./EditableBlock";
import { CopyOutlined } from "@ant-design/icons";
import styled from "styled-components";

export default function EditableBlock({ nowBlank, sideControll }) {
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
      <EditBlockWrapper className={sideControll ? "mgL25" : "mgL0"}>
        <div style={{ width: "100%" }}>
          <ContentEditable
            className="eightSeven"
            html={nowBlank?.title?.html} //
            disabled={false}
            onChange={(e) => {
              dispatch(blankNameAction({ html: e.target.value }));
            }}
            tagName="h2"
            placeholder={"무제"}
            onKeyDown={onKeyDownHandler}
          />
          <hr className="hrMg2" />
          <ContentEditable
            className="eightSeven blankText"
            html={nowBlank?.text?.html}
            disabled={false}
            onChange={(e) =>
              dispatch(blankTextAction({ html: e.target.value }))
            }
            tagName="div"
            placeholder={"마음껏 보여주세요!"}
            innerRef={ref}
          />
        </div>
      </EditBlockWrapper>
    </>
  );
}

//저장을 html 객체로 함 -> 불러올 때 고대로 가져와서 contentEditable html에 넣음
//결국 저 태그로만 저장하고 불러올 수 있는 애들임
export const CopyToOutline = styled(CopyOutlined)`
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 60%);
  border-radius: 20%;
  text-align: end;
`;
