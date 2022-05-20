import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useSelector, useDispatch } from "react-redux";
import { modifyDataAction } from "../reducer/etcducer";
import { EditBlockWrapper } from "./EditableBlock";

export default function EditableBlock({ modifyData, setModifyData, disable }) {
  const ref = useRef();

  const etcState = useSelector((state) => state.etcReducer);
  const { nowWritten } = etcState;
  const dispatch = useDispatch();

  /*!disable && ref.current.focus();*/

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current.focus();
    }
  };
  const modifyTitleHandler = (e) => {
    setModifyData({ ...modifyData, title: { html: e.target.value } });
  };
  const modifyTextHandler = (e) => {
    setModifyData({ ...modifyData, text: { html: e.target.value } });
  };
  return (
    <>
      <EditBlockWrapper>
        <div style={{ width: "100%" }}>
          <ContentEditable
            className="eightSeven"
            html={disable ? nowWritten?.title?.html : modifyData?.title?.html} //
            disabled={disable ? true : false}
            onChange={(e) => modifyTitleHandler(e)}
            tagName="h2"
            placeholder={"무제"}
            onKeyDown={onKeyDownHandler}
          />
          <hr className="hrMg2" />
          <ContentEditable
            className="eightSeven blankText"
            html={disable ? nowWritten?.text?.html : modifyData?.text?.html}
            disabled={disable ? true : false}
            onChange={(e) => modifyTextHandler(e)}
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
