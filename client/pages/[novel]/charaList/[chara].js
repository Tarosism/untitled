import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { LinkWrapper } from "../../../style/NovelMainStyle";
import EditableBlockChara from "../../../components/EditableBlockChara";
import { LeftOutlined, CopyOutlined } from "@ant-design/icons";
import BlankNav from "../../../components/BlankNav";
import { useSelector, useDispatch } from "react-redux";

export default function chara() {
  const router = useRouter();
  const { chara, novel } = router.query;
  const dispatch = useDispatch();

  const state = useSelector((state) => state.userReducer);
  const { me, nowSelect } = state;

  const [linkCount, setLinkCount] = useState(3);

  const idx = nowSelect.chara.findIndex((fill) => fill.id === Number(chara));
  const nowChara = nowSelect.chara[idx];

  return (
    <>
      <BlankWrapper>
        <BlankNav />
        <BlackMain>
          <LinkWrapper>
            <div>
              {" "}
              <Link href={"/"}>
                <span className="eightSeven">
                  <LeftOutlined
                    className="threeEight"
                    style={{ fontSize: "14px" }}
                  />{" "}
                  {me?.nickName}
                </span>
              </Link>
            </div>
            <span className="threeEight">/</span>
            <Link href={`/${novel}`}>
              <span className="eightSeven">{nowSelect.title.html}</span>
            </Link>
            {linkCount > 2 && (
              <>
                <span className="threeEight">/</span>
                <Link href={`/${novel}/charaList`}>
                  <span className="eightSeven">캐릭터</span>
                </Link>
                <span className="threeEight">/</span>
                <span className="eightSeven">{nowChara.name.html}</span>
              </>
            )}
          </LinkWrapper>

          <EditableBlockWrapper>
            <EditableBlockChara nowChara={nowChara} />
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
