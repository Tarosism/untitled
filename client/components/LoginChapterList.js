import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

export default function LoginChapterList({
  chapterTitle,
  wordCounts,
  incompleteChapters,
}) {
  const state = useSelector((state) => state.userReducer);
  const { me } = state;

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
              <span className="six">
                {incompleteChapters.word} / {incompleteChapters.targetWords}{" "}
              </span>
            ) : (
              <span className="six">{wordCounts}</span>
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
