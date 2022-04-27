import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { LinkWrapper } from "../../../style/NovelMainStyle";
import EditableBlock from "../../../components/EditableBlock";
import { LeftOutlined, CopyOutlined } from "@ant-design/icons";
import { PaddingLine } from "../../../style/NovelMainStyle";

export default function synopsis() {
  const router = useRouter();
  const { synopsis, novel } = router.query;

  const [linkCount, setLinkCount] = useState(3);

  return (
    <>
      <BlankWrapper>
        <BlackMain>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
                  <Link href={`/${novel}/synopsisList`}>
                    <span className="eightSeven">시놉시스</span>
                  </Link>
                  <span className="threeEight">/</span>
                  <span className="eightSeven">{synopsis}</span>
                </>
              )}
            </LinkWrapper>

            <EditableBlockWrapper>
              <EditableBlock />
            </EditableBlockWrapper>
          </div>
        </BlackMain>
      </BlankWrapper>
    </>
  );
}

const BlankWrapper = styled.div`
  width: 99vw;
`;

const BlackMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-left: 1px solid rgba(255, 255, 255, 60%);
`;

const EditableBlockWrapper = styled.div`
  width: 100%;
`;
