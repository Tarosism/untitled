import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useSelector, useDispatch } from "react-redux";
import { blankNameAction, blankTextAction } from "../reducer/user";
import { modifyDataAction } from "../reducer/etcducer";

export default function EditableBlock({}) {
  const ref = useRef();

  const etcState = useSelector((state) => state.etcReducer);
  const { modifyData, nowWritten, disable } = etcState;
  const dispatch = useDispatch();
  //수정 가능하게 바뀌었다는 걸 알려주는 포커싱
  !disable && ref.current.focus();
  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current.focus();
    }
  };
  const modifyTitleHandler = (e) => {
    dispatch(
      modifyDataAction({ ...modifyData, title: { html: e.target.value } })
    );
  };
  const modifyTextHandler = (e) => {
    dispatch(
      modifyDataAction({ ...modifyData, text: { html: e.target.value } })
    );
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
      </div>
    </>
  );
}

//저장을 html 객체로 함 -> 불러올 때 고대로 가져와서 contentEditable html에 넣음
//결국 저 태그로만 저장하고 불러올 수 있는 애들임
