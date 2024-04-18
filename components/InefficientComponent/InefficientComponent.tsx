"use client";
import { useState } from "react";
import TextInput from "../TextInput/TextInput";

const InefficientComponent = (): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const handleTextInputValueChange = (value: string): void => {
    setValue(value);
    const l: string[] = [];
    for (let i = 0; i < 20000; i++) {
      l.push(value);
    }
    setList(l);
  };

  return (
    <>
      <TextInput
        value={value}
        handleTextInputValueChange={handleTextInputValueChange}
      />
      {list.map((listItem, index) => {
        return <div key={index}>{listItem}</div>;
      })}
    </>
  );
};

export default InefficientComponent;
