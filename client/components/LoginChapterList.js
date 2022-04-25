import React from "react";
import styled from "styled-components";

export default function LoginChapterList({
  chapterTitle,
  wordCounts,
  incompleteChapters,
}) {
  return (
    <>
      <NovelListWrapper>
        <img
          src="http://placeimg.com/190/130/any"
          style={{ marginRight: "2rem" }}
        />
        <NovelList>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <h3>
              {incompleteChapters ? incompleteChapters.title : chapterTitle}
            </h3>{" "}
            {incompleteChapters ? (
              <sapn className="six">
                {incompleteChapters.word} / {incompleteChapters.targetWords}{" "}
              </sapn>
            ) : (
              <sapn className="six">{wordCounts}</sapn>
            )}
          </div>
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
