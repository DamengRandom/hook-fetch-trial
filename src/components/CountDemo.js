import React, { useState } from "react";

import CountChildDemo from "./CountChildDemo";

function CountDemo() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const onOdd = React.useCallback(() => setText("tada .."), [setText]);
  const data = React.useMemo(
    () => ({
      text2,
      isEven: text2.length % 2 === 0
    }),
    [text2]
  );
  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <input
        type="text"
        value={text2}
        onChange={e => setText2(e.target.value)}
      />
      <CountChildDemo
        // onOdd={() => {
        //   setText("");
        // }}
        onOdd={onOdd}
        data={data}
      />
    </div>
  );
}

export default CountDemo;
