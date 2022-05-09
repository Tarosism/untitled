import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { LinkWrapper } from "../../style/NovelMainStyle";
import EditableBlockWorldview from "../../components/EditableBlockWorldview";
import { useSelector, useDispatch } from "react-redux";
import { LeftOutlined, CopyOutlined } from "@ant-design/icons";
import BlankNav from "../../components/BlankNav";

export default function worldview() {
  const router = useRouter();
  const { novel } = router.query;

  const state = useSelector((state) => state.userReducer);
  const { me, nowSelect } = state;

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
                <span className="eightSeven">세계관</span>
              </>
            )}
          </LinkWrapper>

          <EditableBlockWrapper>
            <EditableBlockWorldview worldview={nowSelect.worldview} />
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
