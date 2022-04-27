import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  MainDefault,
  LinkWrapper,
  DoingWrapper,
} from "../../style/NovelMainStyle";
import { NovelDoingSelect, PaddingLine } from "../../style/MainStyle";
import {
  LeftOutlined,
  ContainerOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import LoginNav from "../../components/LoginNav";

export default function charaList() {
  const router = useRouter();
  const { novel } = router.query;

  const [linkCount, setLinkCount] = useState(3);

  const charaListBox = [`김깐돌`, `고귀한 막시무스 1세`];

  return (
    <>
      <LoginNav />
      <MainDefault>
        <br />
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
              <span className="eightSeven">캐릭터</span>
            </>
          )}
        </LinkWrapper>
        <PaddingLine />
        <DoingWrapper>
          {charaListBox.map((fill) => (
            <Link href={`/${novel}/charaList/${fill}`}>
              <NovelDoingSelect>
                <ContainerOutlined
                  style={{ fontSize: "2.5rem" }}
                  className="six"
                />
                <br />
                {fill}
              </NovelDoingSelect>
            </Link>
          ))}

          <NovelDoingSelect>
            <PlusCircleOutlined
              style={{ fontSize: "2.5rem" }}
              className="six"
            />
          </NovelDoingSelect>
        </DoingWrapper>
      </MainDefault>
    </>
  );
}
