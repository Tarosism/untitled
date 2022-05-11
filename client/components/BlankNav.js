import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { DashOutlined } from "@ant-design/icons";

export default function BlankNav() {
  const [sideOpen, setSideOpen] = useState(false);

  const state = useSelector((state) => state.userReducer);
  const { me, nowSelect } = state;
  const dispatch = useDispatch();

  const sideOpenHandler = () => {
    setSideOpen((prev) => !prev);
  };
  return (
    <>
      <SidebarWrapper>
        <Sidebar>
          <SidebarSelectBox onClick={sideOpenHandler}>세계관</SidebarSelectBox>
          <SidebarSelectBox>캐릭터</SidebarSelectBox>
          <DashOutlined className="six" />
        </Sidebar>
        {sideOpen && (
          <ClickedSidebar>{nowSelect.worldview.text.html}</ClickedSidebar>
        )}
      </SidebarWrapper>
    </>
  );
}

const SidebarWrapper = styled.div`
  height: 100vh;
  display: flex;
`;
const Sidebar = styled.div`
  width: 4rem;
  height: 100%;
  background-color: #282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 1.5rem;
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
`;
