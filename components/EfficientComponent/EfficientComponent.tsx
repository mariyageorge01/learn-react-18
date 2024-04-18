"use client";
import { useState, useTransition } from "react";
import TextInput from "../TextInput/TextInput";

const EfficientComponent = (): JSX.Element => {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const handleTextInputValueChange = (value: string): void => {
    setValue(value);
    startTransition(() => {
      const l: string[] = [];
      for (let i = 0; i < 20000; i++) {
        l.push(value);
      }
      setList(l);
    });
  };

  return (
    <>
      <TextInput
        value={value}
        handleTextInputValueChange={handleTextInputValueChange}
      />
      <div>
        {isPending
          ? "Loading......."
          : list.map((listItem, index) => {
              return <div key={index}>{listItem}</div>;
            })}
      </div>
    </>
  );
};

export default EfficientComponent;
