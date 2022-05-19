import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import SidePlate from "./SidePlate";
import { sidebarControllAction } from "../reducer/etcducer";

import { DoubleLeftOutlined } from "@ant-design/icons";

export default function BlankNav() {
  const [sideOpen, setSideOpen] = useState(false);
  const [sideTag, setSideTag] = useState("");
  const [sideTitle, setSideTitle] = useState("");

  const state = useSelector((state) => state.userReducer);
  const etcState = useSelector((state) => state.etcReducer);
  const { me, nowSelect } = state;
  const { target } = etcState;
  const dispatch = useDispatch();

  const sideOpenHandler = (tag, title) => {
    setSideTag(tag);
    setSideTitle(title);
    setSideOpen(true);
    dispatch(sidebarControllAction(true));
  };
  const sideCloseHandler = () => {
    setSideOpen(false);
    dispatch(sidebarControllAction(false));
  };
  return (
    <>
      <SidebarWrapper>
        <Sidebar>
          {target !== "synopsis" && (
            <SidebarSelectBox
              onClick={() => sideOpenHandler("synopsis", "시놉시스")}
            >
              시놉
              <br />
              시스
            </SidebarSelectBox>
          )}
          {target !== "worldview" && (
            <SidebarSelectBox
              onClick={() => sideOpenHandler("worldview", "세계관")}
            >
              세계관
            </SidebarSelectBox>
          )}
          {target !== "chara" && (
            <SidebarSelectBox
              onClick={() => sideOpenHandler("chara", "캐릭터")}
            >
              캐릭터
            </SidebarSelectBox>
          )}
        </Sidebar>
        <ClickedSidebar className={sideOpen ? "sideOpenTab" : "sideCloseTab"}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>{sideTitle}</div>
            <DoubleLeftOutlined onClick={sideCloseHandler} />
          </div>
          <hr />
          <SidePlate sideTag={sideTag} sideTitle={sideTitle} />
        </ClickedSidebar>
      </SidebarWrapper>
    </>
  );
}

const SidebarWrapper = styled.div`
  height: 100vh;
  display: flex;
`;
const Sidebar = styled.div`
  position: fixed;
  left: 0;
  width: 4rem;
  height: 100%;
  background-color: #282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 4rem;
  z-index: 1;
`;
const SidebarSelectBox = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 60%);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 60%);
  font-size: 13px;
  z-index: 99;
`;

const ClickedSidebar = styled.div`
  width: 23.5rem;
  height: 100vh;
  background-color: #303030;
  box-shadow: 0.25rem 0 0.7rem #000;
  color: rgba(255, 255, 255, 87%);
  padding: 1.5rem;
  position: fixed;
  z-index: 0;
`;
