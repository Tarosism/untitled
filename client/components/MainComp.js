import React, { useState } from "react";
import { NavButton } from "../style/NavStyle";
import MainCarousel from "../components/MainCarousel";
import { MainDefault, TextCenter, PaddingLine } from "../style/MainStyle";

export default function MainComp() {
  return (
    <>
      <MainDefault>
        <PaddingLine />
        <TextCenter>
          <h2>
            뭔가 멋진 문구
            <br /> 멋진 앱 이름
          </h2>
          <PaddingLine />
          <p className="six">
            법률 안에 이의가 있을 때에는 대통령은 제 1항의 기간내에 이의서를
            붙여 국회로 횐부하고
          </p>
          <PaddingLine />
          <NavButton>지금 바로 시작하기</NavButton>
        </TextCenter>
        <PaddingLine />
        <MainCarousel />
      </MainDefault>
    </>
  );
}
