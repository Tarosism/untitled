import React, { useState } from "react";
import { useRouter } from "next/router";

export default function NovelDetail() {
  const router = useRouter();
  const { novel } = router.query;
  return (
    <>
      <br />
      <div>
        <img
          src="http://placeimg.com/320/220/any"
          style={{ marginRight: "2rem", float: "left" }}
        />
        <div>
          <div>
            <h2>{novel}</h2>
            <br />
            <p>
              <span style={{ fontSize: "14px" }} className="six">
                글{" "}
              </span>{" "}
              양승준
            </p>
            <hr />
            <p className="six">
              순식간에 지나쳐버린 봄을 기억할 틈도 없이 뜨거운 여름이 오고 etc
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
