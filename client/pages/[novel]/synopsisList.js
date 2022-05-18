import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  MainDefault,
  LinkWrapper,
  DoingWrapper,
} from "../../style/NovelMainStyle";
import { useSelector, useDispatch } from "react-redux";

import { NovelDoingSelect, PaddingLine } from "../../style/MainStyle";
import {
  LeftOutlined,
  ContainerOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { addSynopsisAction } from "../../reducer/user";

import LoginNav from "../../components/LoginNav";

export default function synopsisList() {
  const router = useRouter();
  const { novel } = router.query;
  const dispatch = useDispatch();

  const state = useSelector((state) => state.userReducer);
  const { me, nowSelect } = state;

  const [linkCount, setLinkCount] = useState(3);

  const addSynopsis = () => {
    const countId = nowSelect.synopsis[nowSelect.synopsis.length - 1].id + 1;
    const data = {
      id: countId,
      title: { html: "" },
      text: { html: "" },
    };
    dispatch(addSynopsisAction(data));
    router.push(`/${novel}/synopsisList/${countId}`);
  };

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
                <LeftOutlined className="threeEight font14" /> {me?.nickName}
              </span>
            </Link>
          </div>
          <span className="threeEight">/</span>
          <Link href={`/${novel}`}>
            <span className="eightSeven">{nowSelect?.title?.html}</span>
          </Link>
          {linkCount > 2 && (
            <>
              <span className="threeEight">/</span>
              <span className="eightSeven">시놉시스</span>
            </>
          )}
        </LinkWrapper>
        <PaddingLine />
        <DoingWrapper>
          {nowSelect.synopsis.map((fill) => (
            <Link href={`/${novel}/synopsisList/${fill.id}`}>
              <NovelDoingSelect>
                <ContainerOutlined className="eightSeven font2dot5rem" />
                <br />
                {fill.title.html ? fill.title.html : "무제"}
              </NovelDoingSelect>
            </Link>
          ))}

          <NovelDoingSelect onClick={addSynopsis}>
            <PlusCircleOutlined className="threeEight font2dot5rem" />
          </NovelDoingSelect>
        </DoingWrapper>
      </MainDefault>
    </>
  );
}
