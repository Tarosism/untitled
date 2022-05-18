import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import {
  PaddingLine13,
  BlankWrapper,
  BlackMain,
  EditableBlockWrapper,
} from "../../style/NovelMainStyle";
import EditableBlockBlank from "../../components/EditableBlockBlank";
import { useSelector, useDispatch } from "react-redux";
import BlankNav from "../../components/BlankNav";
import { convert } from "html-to-text";
import { copyAction } from "../../reducer/copyed";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { pageSelectAction, endBlankAction } from "../../reducer/user";
import { sidebarTargetAction } from "../../reducer/etcducer";
import LinkWrap from "../../components/LinkWrap";

export default function blank() {
  const router = useRouter();
  const { novel } = router.query;

  const state = useSelector((state) => state.userReducer);
  const etcState = useSelector((state) => state.etcReducer);
  const { nowSelect } = state;
  const { sideControll } = etcState;
  const dispatch = useDispatch();

  const [linkCount, setLinkCount] = useState(3);

  const [writingAlert, setWritingAlert] = useState("opa0");

  const textCounts = convert(nowSelect.writing?.text.html, {
    wordwrap: 130,
  });
  const copyTextHandler = (textCounts, result) => {
    dispatch(copyAction({ value: textCounts, copied: true }));
    result && setWritingAlert("opa100");
    setTimeout(() => {
      setWritingAlert("opa0");
    }, 1500);
  };
  useEffect(() => {
    dispatch(pageSelectAction("blank"));
    dispatch(sidebarTargetAction("blank"));
  }, []);

  return (
    <>
      <CopyAlert className={`eightSeven ${writingAlert}`}>
        복사 되었습니다
      </CopyAlert>
      <BlankWrapper>
        <BlankNav />
        <BlackMain>
          <div style={{ display: "flex" }}>
            <LinkWrap linkCount={linkCount} props={nowSelect.writing} />
            <SideBtnWrapper>
              <div style={{ textAlign: "end" }}>
                <p className="six font14">{textCounts.length} 자</p>
              </div>
              <SideBtnInnerWrapper>
                <CopyToClipboard
                  text={textCounts}
                  onCopy={(textCounts, result) =>
                    copyTextHandler(textCounts, result)
                  }
                >
                  <CopyBtn className="six">복사</CopyBtn>
                </CopyToClipboard>
                <CopyBtn
                  className="six"
                  onClick={() => {
                    const { id } = nowSelect.writing;
                    dispatch(endBlankAction());
                    router.push(`/${novel}/written/${id}`);
                  }}
                >
                  완료
                </CopyBtn>
              </SideBtnInnerWrapper>

              <CopyBtnSort></CopyBtnSort>
            </SideBtnWrapper>
          </div>
          <EditableBlockWrapper>
            <PaddingLine13 />
            <EditableBlockBlank
              nowBlank={nowSelect.writing}
              sideControll={sideControll}
            />
          </EditableBlockWrapper>
        </BlackMain>
      </BlankWrapper>
    </>
  );
}

const CopyAlert = styled.div`
  width: 10rem;
  height: 5rem;
  background-color: #282828;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  border-radius: 3rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 70%);
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  font-size: 14px;
  gap: 1rem;
  align-items: center;
`;
export const SideBtnInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;
export const CopyBtn = styled.button`
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.25rem;
  border: 1px solid rgba(255, 255, 255, 60%);
  border-radius: 20%;
  background-color: transparent;
`;
export const CopyBtnSort = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 1rem 1rem 1rem;
`;
