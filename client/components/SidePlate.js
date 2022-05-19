import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { UnorderedListOutlined } from "@ant-design/icons";
import ContentEditable from "react-contenteditable";

export default function SidePlate({ sideTag, sideTitle }) {
  const state = useSelector((state) => state.userReducer);

  const { me, nowSelect } = state;

  const [dataSet, setDataSet] = useState(false);
  const [inData, setInData] = useState("");

  useEffect(() => {
    setInData("");
    setDataSet(false);
  }, [sideTag]);

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
          {sideTag !== "worldview"
            ? nowSelect[sideTag]?.map((fill) => (
                <SideSelect onClick={() => openSideData(fill.text.html)}>
                  {fill.title.html}
                </SideSelect>
              ))
            : openSideData(nowSelect[sideTag].text.html)}
        </SideWrapper>
      )}
      {dataSet && sideTag !== "worldview" && (
        <>
          <UnorderedListOutline onClick={dataListSetHandler} />
          <div style={{ paddingBottom: "2rem" }} />
        </>
      )}
      <div>
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
const UnorderedListOutline = styled(UnorderedListOutlined)`
  float: right;
`;
