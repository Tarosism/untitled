import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { convert } from "html-to-text";

export default function LoginMainRecord() {
  const state = useSelector((state) => state.userReducer);
  const { me } = state;
  const [textCounts, setTextCounts] = useState("");
  const [charaCounts, setCharaCounts] = useState("");
  const [completeChaptersCounts, setCompleteChaptersCounts] = useState("");

  useEffect(() => {
    const box = [];
    const novel = me.novelList.map((fill) => fill.written);
    const obj = novel.flat();
    box.push(
      ...obj.map(
        (fill) =>
          convert(fill.text.html, {
            wordwrap: 130,
          }).length
      )
    );
    const chara = me.novelList.map((fill) => fill.chara);
    const obj2 = chara.flat();
    console.log(obj2);
    setTextCounts(box.reduce((a, b) => a + b));
    setCompleteChaptersCounts(obj.length);
    setCharaCounts(obj2.length);
  }, []);

  return (
    <>
      <RecordWrapper>
        <div>
          <p className="threeEight">총 글자수</p>
          <InlineH1>{textCounts}</InlineH1>
        </div>
        <div>
          <p className="threeEight">창조한 캐릭터</p>
          <InlineH1>{charaCounts}</InlineH1>
        </div>
        <div>
          <p className="threeEight">완료한 챕터</p>
          <InlineH1>{completeChaptersCounts}</InlineH1>
        </div>
      </RecordWrapper>
    </>
  );
}

const RecordWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 15rem);
  justify-content: space-around;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.38);
  padding: 3rem;
  margin-top: 1.5rem;
`;

const InlineH1 = styled.h1`
  display: inline-block;
  margin-top: 1rem;
`;
