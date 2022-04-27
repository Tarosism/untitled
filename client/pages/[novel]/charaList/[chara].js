import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { LinkWrapper } from "../../../style/NovelMainStyle";
import EditableBlock from "../../../components/EditableBlock";
import { LeftOutlined, CopyOutlined } from "@ant-design/icons";
import BlankNav from "../../../components/BlankNav";

export default function chara() {
  const router = useRouter();
  const { chara, novel } = router.query;

  const [linkCount, setLinkCount] = useState(3);

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
                  양승준
                </span>
              </Link>
            </div>
            <span className="threeEight">/</span>
            <Link href={`/${novel}`}>
              <span className="eightSeven">{novel}</span>
            </Link>
            {linkCount > 2 && (
              <>
                <span className="threeEight">/</span>
                <Link href={`/${novel}/charaList`}>
                  <span className="eightSeven">캐릭터</span>
                </Link>
                <span className="threeEight">/</span>
                <span className="eightSeven">{chara}</span>
              </>
            )}
          </LinkWrapper>

          <EditableBlockWrapper>
            <EditableBlock />
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
