import React from "react";
import styled from "styled-components";
import { convert } from "html-to-text";

export default function LoginChapterList({
  chapterTitle,
  wordCounts,
  incompleteChapters,
}) {
  const textCounts = convert(incompleteChapters?.text.html, {
    wordwrap: 130,
  });

  const writtenCounts = convert(wordCounts, {
    wordwrap: 130,
  });

  return (
    <>
      <NovelListWrapper>
        <img
          src="http://placeimg.com/190/130/any"
          style={{ marginRight: "2rem" }}
        />
        <NovelList>
          <NovelListInner>
            <h3>
              {incompleteChapters
                ? incompleteChapters.title.html.length === 0
                  ? "제목없음"
                  : incompleteChapters.title.html
                : chapterTitle}
            </h3>{" "}
            {incompleteChapters ? (
              <span className="six">{textCounts.length}</span>
            ) : (
              <span className="six font14">{writtenCounts.length}</span>
            )}
          </NovelListInner>
        </NovelList>
      </NovelListWrapper>
    </>
  );
}

const NovelListWrapper = styled.div`
  display: flex;
  border-top: 1px solid rgba(255, 255, 255, 0.38);
  border-bottom: 1px solid rgba(255, 255, 255, 0.38);
`;
const NovelList = styled.div`
  display: flex;
`;
const NovelListInner = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
