import { useState } from "react";
import TodoInput from "./TodoInput";
import ShowInputButton from "./ShowInputButton";

function InputContainer() {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = () => {
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <TodoInput onClose={onClose} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  );
}

export default InputContainer;
