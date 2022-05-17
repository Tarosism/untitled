import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { UnorderedListOutlined } from "@ant-design/icons";
import ContentEditable from "react-contenteditable";

export default function SidePlate({ sideTag }) {
  const state = useSelector((state) => state.userReducer);

  const { me, nowSelect } = state;

  const [dataSet, setDataSet] = useState(false);
  const [inData, setInData] = useState("");

  const openSideData = (text) => {
    setDataSet(true);
    setInData(text);
  };

  const dataListSetHandler = () => {
    setDataSet(false);
    setInData("");
  };
  return (
    <>
      {!dataSet && (
        <SideWrapper>
          {nowSelect[sideTag]?.map((fill) => {
            return sideTag !== "worldview" ? (
              <SideSelect onClick={() => openSideData(fill.text.html)}>
                {fill.title.html}
              </SideSelect>
            ) : (
              <div style={{ paddingTop: "2rem" }}>
                <ContentEditable
                  className="eightSeven"
                  html={inData}
                  disabled={true}
                  tagName="div"
                />
              </div>
            );
          })}
        </SideWrapper>
      )}
      {dataSet && (
        <UnorderedListOutlined
          style={{
            display: "inline-block",
            float: "right",
          }}
          onClick={dataListSetHandler}
        />
      )}
      <div style={{ paddingTop: "2rem" }}>
        <ContentEditable
          className="eightSeven"
          html={inData}
          disabled={true}
          tagName="div"
        />
      </div>
    </>
  );
}

const SideWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(1rem, auto));
  justify-content: space-around;
  gap: 2rem 5px;
`;
const SideSelect = styled.div`
  width: 5rem;
  height: 5rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.86);
  cursor: pointer;
  font-size: 14px;
`;
