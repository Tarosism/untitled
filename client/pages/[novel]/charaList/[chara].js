import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { LinkWrapper } from "../../../style/NovelMainStyle";
import EditableBlockChara from "../../../components/EditableBlockChara";
import BlankNav from "../../../components/BlankNav";
import { useSelector, useDispatch } from "react-redux";
import { sidebarTargetAction } from "../../../reducer/etcducer";
import LinkWrap from "../../../components/LinkWrap";

export default function chara() {
  const router = useRouter();
  const { chara, novel } = router.query;
  const dispatch = useDispatch();

  const state = useSelector((state) => state.userReducer);
  const etcState = useSelector((state) => state.etcReducer);
  const { nowSelect } = state;
  const { sideControll } = etcState;

  useEffect(() => {
    dispatch(sidebarTargetAction("chara"));
  }, []);

  const [linkCount, setLinkCount] = useState(3);

  const idx = nowSelect.chara.findIndex((fill) => fill.id === Number(chara));
  const nowChara = nowSelect.chara[idx];

  return (
    <>
      <BlankWrapper>
        <BlankNav />
        <BlackMain>
          <LinkWrapper>
            <LinkWrap props={nowChara} linkCount={linkCount} />
          </LinkWrapper>
          <EditableBlockWrapper>
            <EditableBlockChara
              nowChara={nowChara}
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
