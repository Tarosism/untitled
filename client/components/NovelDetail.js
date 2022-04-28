import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import ContentEditable from "react-contenteditable";
import { useSelector, useDispatch } from "react-redux";
import { novelTitleFixAction, novelInfoFixAction } from "../reducer/user";

export default function NovelDetail() {
  const router = useRouter();
  const { novel } = router.query;

  const state = useSelector((state) => state.userReducer);
  const { me, nowSelect } = state;
  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    nowSelect && dispatch(novelTitleFixAction(nowSelect.title, novel));
    nowSelect && dispatch(novelInfoFixAction(nowSelect.info, novel));

    //제목을 바꾸면 바로바로 수정되는 것을 위해 만들었음. useState 안 쓰기
    //+ 애당초 nowSelect는 redux에서 가져오는 것이기 때문에 여기서 상태를 바꿔주면 쟤도 바뀜
    //고로 제목을 바꾸는데 있어서 이 페이지에 따로 me.title이런 식으로 안 가져와도 됨
  }, [nowSelect]);

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <>
      <br />
      <div
        style={{
          display: "flex",
          maxHeight: "13.75rem",
          maxWidth: "69.375rem",
        }}
      >
        <img
          src="http://placeimg.com/320/220/any"
          style={{ marginRight: "2rem" }}
        />
        <div style={{ width: "100%" }}>
          <div>
            <ContentEditable
              className="eightSeven"
              html={nowSelect?.title}
              disabled={false}
              onChange={(e) => {
                dispatch(novelTitleFixAction(e.target.value, novel));
              }}
              tagName="h2"
              placeholder={"무제"}
              onKeyDown={onKeyDownHandler}
              style={{ overflow: "auto", height: "1.8rem" }}
            />
            <br />
            <p>
              <span style={{ fontSize: "14px" }} className="six">
                글{" "}
              </span>{" "}
              {me?.nickName}
            </p>
            <hr />
            <ContentEditable
              className="eightSeven"
              html={nowSelect?.info}
              disabled={false}
              onChange={(e) => {
                dispatch(novelInfoFixAction(e.target.value, novel));
              }}
              tagName="div"
              placeholder={"작품 설명"}
              style={{ overflow: "auto", height: "8rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
