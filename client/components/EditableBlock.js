import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { useDispatch } from "react-redux";
import { CopyOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { synopsisTitleFixAction, synopsisTextFixAction } from "../reducer/user";
import { convert } from "html-to-text";
import { copyAction } from "../reducer/copyed";
import styled from "styled-components";

export default function EditableBlock({ nowSynopsis, sideControll }) {
  // const [propData, setPropData] = useState(null)
  // if(nowSynopsis) setPropData(nowSynopsis)
  // if(nowChara) setPropData(nowChara)

  const [copyModal, setCopyModal] = useState(false);
  const ref = useRef();

  const dispatch = useDispatch();

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current.focus();
    }
  };

  const textCounts = convert(nowSynopsis?.text.html, {
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
      <EditBlockWrapper className={sideControll ? "mgL25" : "mgL0"}>
        <div style={{ textAlign: "end" }}>
          <p className="six mgZOOO">{textCounts.length}</p>
        </div>
        <EditBlockSpace></EditBlockSpace>
        <div className="flexEnd">
          <CopyToClipboard
            text={textCounts}
            onCopy={(textCounts, result) => copyTextHandler(textCounts, result)}
          >
            <CopyToOutline className="eightSeven" />
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

export const EditBlockWrapper = styled.div`
  width: 31.25rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
export const EditBlockSpace = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 1rem 1rem 1rem;
`;
