import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

export default function LoginMainRecord() {
  const state = useSelector((state) => state.userReducer);
  const { me } = state;

  return (
    <>
      <RecordWrapper>
        <div>
          <p className="threeEight">모든 작품에 쓴 글자수</p>
          <InlineH1>{me.record.words}</InlineH1>
        </div>
        <div>
          <p className="threeEight">창조한 캐릭터</p>
          <InlineH1>{me.record.charaCounts}</InlineH1>
        </div>
        <div>
          <p className="threeEight">완료한 챕터</p>
          <InlineH1>{me.record.chapters}</InlineH1>
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
