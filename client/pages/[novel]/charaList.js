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
import { addCharaAction } from "../../reducer/user";

import LoginNav from "../../components/LoginNav";

export default function charaList() {
  const router = useRouter();
  const { novel } = router.query;
  const dispatch = useDispatch();

  const state = useSelector((state) => state.userReducer);
  const { me, nowSelect } = state;

  const [linkCount, setLinkCount] = useState(3);

  const addChara = () => {
    const countId = nowSelect.chara[nowSelect.chara.length - 1].id + 1;
    const data = {
      id: countId,
      title: { html: "" },
      text: { html: "" },
    };
    dispatch(addCharaAction(data));
    router.push(`/${novel}/charaList/${countId}`);
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
            <span className="eightSeven">{nowSelect.title.html}</span>
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
          {nowSelect.chara.map((fill) => (
            <Link href={`/${novel}/charaList/${fill.id}`}>
              <NovelDoingSelect>
                <ContainerOutlined className="six font2dot5rem" />
                <br />
                {fill.title.html}
              </NovelDoingSelect>
            </Link>
          ))}

          <NovelDoingSelect onClick={addChara}>
            <PlusCircleOutlined className="six font2dot5rem" />
          </NovelDoingSelect>
        </DoingWrapper>
      </MainDefault>
    </>
  );
}
