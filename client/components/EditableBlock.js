import React, { useState, useRef } from "react";
import ContentEditable from "react-contenteditable";

export default function EditableBlock() {
  const [text, setText] = useState({ html: "asd", tagName: "div" });
  const ref = useRef();

  return (
    <>
      <div style={{ width: "844px" }}>
        <ContentEditable
          className="six"
          innerRef={ref}
          html={text.html}
          disabled={false}
          onChange={(e) =>
            setText((prev) => ({ ...prev, html: e.target.value }))
          }
        />
      </div>
    </>
  );
}
