import React from "react";

export default function Selection(props) {
  const [styleAttri, setStyleAttri] = React.useState({ background: "" });
  return (
    <>
      <div
        className="fix-box"
        style={styleAttri}
        onClick={() => props.applyColor(setStyleAttri)}
      >
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
}
