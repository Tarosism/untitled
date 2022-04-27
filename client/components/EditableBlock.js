import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { CopyOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function EditableBlock() {
  const [text, setText] = useState({ html: "" });
  const [title, setTitle] = useState({
    html: "",
  });
  const [copyText, setCopyText] = useState({ value: "", copied: false });
  const [textCounts, setTextCounts] = useState(0);

  const ref = useRef();

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      ref.current.focus();
    }
  };

  const copyTextHandler = () => {
    const el = ref.current;
    setCopyText({ value: el.innerText, copied: true });
    //리덕스 쓰면 바로바로 됐던 걸로 기억을 합니다 아마.. 리덕스 들어가고 안되면 다시 하지 뭐
  };

  const countingText = () => {
    const textCount = ref.current.innerText;
    const counts = textCount.length;
    setTextCounts(counts);
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
            {textCounts}
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
          <CopyToClipboard text={copyText.value} onCopy={copyTextHandler}>
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
              onClick={copyTextHandler}
            />
          </CopyToClipboard>
        </div>
        <div style={{ width: "100%" }}>
          <ContentEditable
            className="eightSeven"
            html={title.html}
            disabled={false}
            onChange={(e) =>
              setTitle((prev) => ({ ...prev, html: e.target.value }))
            }
            tagName="h2"
            placeholder={"무제"}
            onKeyDown={onKeyDownHandler}
          />
          <hr />
          <ContentEditable
            className="eightSeven blankText"
            html={text.html}
            disabled={false}
            onChange={(e) =>
              setText((prev) => ({ ...prev, html: e.target.value }))
            }
            tagName="div"
            placeholder={"마음껏 보여주세요!"}
            innerRef={ref}
            onKeyDown={countingText}
          />
        </div>
      </div>
    </>
  );
}

//저장을 html 객체로 함 -> 불러올 때 고대로 가져와서 contentEditable html에 넣음
//결국 저 태그로만 저장하고 불러올 수 있는 애들임
