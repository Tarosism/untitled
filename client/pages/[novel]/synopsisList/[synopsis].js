import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { PaddingLine, PaddingLine13 } from "../../../style/NovelMainStyle";
import EditableBlock from "../../../components/EditableBlock";
import BlankNav from "../../../components/BlankNav";
import { useSelector, useDispatch } from "react-redux";
import { sidebarTargetAction } from "../../../reducer/etcducer";
import LinkWrap from "../../../components/LinkWrap";

export default function synopsis() {
  const router = useRouter();
  const { synopsis, novel } = router.query;
  const dispatch = useDispatch();

  const state = useSelector((state) => state.userReducer);
  const etcState = useSelector((state) => state.etcReducer);
  const { nowSelect } = state;
  const { sideControll } = etcState;

  useEffect(() => {
    dispatch(sidebarTargetAction("synopsis"));
  }, []);

  const [linkCount, setLinkCount] = useState(3);

  const idx = nowSelect.synopsis.findIndex(
    (fill) => fill.id === Number(synopsis)
  );
  const nowSynopsis = nowSelect.synopsis[idx];
  return (
    <>
      <BlankWrapper>
        <BlankNav />
        <BlackMain>
          <LinkWrap props={nowSynopsis} linkCount={linkCount} />
          <PaddingLine />
          <PaddingLine13 />
          <EditableBlockWrapper>
            <EditableBlock
              nowSynopsis={nowSynopsis}
              sideControll={sideControll}
            />
          </EditableBlockWrapper>
        </BlackMain>
      </BlankWrapper>
    </>
  );
}

const BlankWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex: 1 1 0%;
  position: relative;
  //width: 99vw;
`;

const BlackMain = styled.div`
  width: 100%;
`;

const EditableBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
