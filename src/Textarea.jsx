import React, { useState } from "react";

function Textarea() {
  const [data, setdata] = useState("");
  const [show, setshow] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const textChange = (e) => {
    const text = e.target.value;
    setdata(text);
    const words = text.trim().split(/\s+/);
    setWordCount(words.length);
    setCharCount(text.length);
  };

  const preview = () => {
    setshow(data);
  };

  const clear = () => {
    setdata("");
    setshow("");
    setWordCount(0);
    setCharCount(0);
  };

  return (
    <div>
      <textarea
        value={data}
        onChange={textChange}
        placeholder="Enter your text"
        style={{ width: "300px", height: "100px" }}
      />
      <p>Word count: {wordCount}</p>
      <p>Character count: {charCount}</p>
      <div>
        <h3>Output:</h3>
        <p>{show}</p>
      </div>
      <button onClick={preview}>Preview</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default Textarea;
