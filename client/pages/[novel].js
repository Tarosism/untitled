import React, { useState } from "react";
import { useRouter } from "next/router";
import LoginNav from "../components/LoginNav";
import { MainDefault } from "../style/MainStyle";
import Link from "next/link";
import styled from "styled-components";
import { LeftOutlined } from "@ant-design/icons";

export default function novel() {
  const router = useRouter();
  const { novel } = router.query;

  const [linkCount, setLinkCount] = useState(2);

  return (
    <>
      <LoginNav />
      <MainDefault>
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
          {linkCount <= 2 && <span className="threeEight">/</span>}
          <span className="eightSeven">{novel}</span>
        </LinkWrapper>
      </MainDefault>
    </>
  );
}

const LinkWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
