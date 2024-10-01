import { useEffect, useRef } from "react";
import Input from "@/components/common/Input";
import "./OTPInputsGroup.scss";

const OTPInputsGroup = ({ inputsCount }) => {
  const inputRefs = useRef([]);
  const inputs = Array.from({ length: inputsCount });

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleKeyDown = (e, index) => {
    const allowedKeys = [
      "Backspace",
      "Tab",
      "ArrowLeft",
      "ArrowRight",
      "Delete",
    ];

    if (allowedKeys.includes(e.key) || /^[0-9]$/.test(e.key)) {
      if (e.key === "Backspace" && inputRefs.current[index]?.value === "") {
        e.preventDefault();
        focusInput(index - 1);
      } else if (/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        inputRefs.current[index].value = e.key;
        console.log(`Input ${index + 1} value:`, e.key);
        focusInput(index + 1);
      }
    } else {
      e.preventDefault();
    }
  };

  const focusInput = (index) => {
    if (index >= 0 && index < inputsCount) {
      inputRefs.current[index].focus();
    }
  };

  return (
    <div className="inputs-group">
      {inputs.map((_, index) => (
        <Input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          maxLength={1}
          maxWidth="3rem"
          height="3rem"
          className="inputs-group_text-center"
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OTPInputsGroup;
