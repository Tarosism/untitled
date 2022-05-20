import styled from "styled-components";

export const MainDefault = styled.div`
  aspect-ratio: auto 1 / 1;
  padding: 0 278px;
  width: 66vw;
  @media ${(props) => props.theme.laptop} {
    padding: 0 250px;
  }
  @media ${(props) => props.theme.tabletL} {
    padding: 0 210px;
  }
  @media ${(props) => props.theme.tabletM} {
    padding: 0 200px;
  }
  @media ${(props) => props.theme.tabletS} {
    padding: 0 180px;
  }
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
export const PaddingLine13 = styled.div`
  padding: 13px 0;
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
  left: 0;
  z-index: 99;
  background-color: #303030;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
  height: 3rem;
  align-items: center;
`;

export const DoingWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  justify-content: space-between;
  justify-items: center;
  gap: 2rem 10px;
`;

export const IntroduceWrapper = styled.div``;

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
