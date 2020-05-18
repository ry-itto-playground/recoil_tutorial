import React from "react";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";

const textState = atom({
  key: "textState",
  default: "",
});

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
};

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);
    return text.length;
  },
});

const CharacterCount = () => {
  const count = useRecoilValue(charCountState);
  return <>Character Count: {count}</>;
};

const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
};
export default CharacterCounter;
