import React from "react";
import styled from "styled-components";

export default function LoginMainRecord() {
  return (
    <>
      <RecordWrapper>
        <div>
          <p className="threeEight">모든 작품에 쓴 글자수</p>
          <InlineH1>3,456,123,123</InlineH1>
        </div>
        <div>
          <p className="threeEight">창조한 캐릭터</p>
          <InlineH1>563</InlineH1>
        </div>
        <div>
          <p className="threeEight">완료한 챕터</p>
          <InlineH1>12</InlineH1>
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
