'use client';
import styles from "./TextInput.module.scss";

interface ITextInputProps {
    value: string;
    handleTextInputValueChange: (value: string) => void;
}
const TextInput = ({ value, handleTextInputValueChange }: ITextInputProps): JSX.Element => {
    return <input type="text" className={styles["text-input"]} value={value} onChange={(event) => handleTextInputValueChange(event.target.value)}></input>
}

export default TextInput;