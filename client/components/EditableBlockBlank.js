import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useSelector, useDispatch } from "react-redux";
import { blankNameAction, blankTextAction } from "../reducer/user";

export default function EditableBlock({ nowBlank, disable }) {
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
        <div style={{ width: "100%" }}>
          <ContentEditable
            className="eightSeven"
            html={nowBlank.title.html}
            disabled={disable ? true : false}
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
            disabled={disable ? true : false}
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

//저장을 html 객체로 함 -> 불러올 때 고대로 가져와서 contentEditable html에 넣음
//결국 저 태그로만 저장하고 불러올 수 있는 애들임
