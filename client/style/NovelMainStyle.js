import styled from "styled-components";

export const MainDefault = styled.div`
  margin: 0 416px;
`;
export const TextCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const PaddingLine = styled.div`
  padding: 25px 0;
`;

export const LinkWrapperBlank = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
  height: 3rem;
  align-items: center;
  position: fixed;
  top: 0;
  left: 1rem;
  z-index: 99;
  background-color: #303030;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
  height: 3rem;
  align-items: center;
  margin-left: 1rem;
`;

export const DoingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 15rem);
  justify-content: space-between;
  gap: 5rem 50px;
`;

export const IntroduceWrapper = styled.div`
  display: grid;
`;

export const BlankWrapper = styled.div`
  display: flex;
  flex: 1 1 0%;
  position: relative;
  //width: 99vw;
`;

export const BlackMain = styled.div`
  width: 100%;
`;

export const EditableBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
