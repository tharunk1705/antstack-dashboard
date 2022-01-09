import { useRef } from "react";

const Input = ({ type, label, onChangeHandler }) => {
  const inputRef = useRef("");
  const inputChangeHandler = (event) => {
    onChangeHandler(inputRef.current.value);
  };
  return (
    <div className="">
      <label htmlFor={label}>{label} : </label>
      <input
        name={label}
        type={type}
        className={`bg-gray-100 border border-gray-300 p-2 rounded-md focus:ring-2 focus:bg-gray-200 focus:outline-none focus:ring-purple-700 ${
          type === "date" ? "w-4/5" : ""
        }`}
        ref={inputRef}
        onChange={inputChangeHandler}
      />
    </div>
  );
};

export default Input;
