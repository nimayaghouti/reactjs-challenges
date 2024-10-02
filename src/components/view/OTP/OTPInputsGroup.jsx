import { useEffect, useRef } from "react";
import Input from "@/components/common/Input";
import "./OTPInputsGroup.scss";

const OTPInputsGroup = ({ inputsCount, onChange, otpValues }) => {
  const inputRefs = useRef([]);
  const inputs = Array.from({ length: inputsCount });

  useEffect(() => {
    inputRefs.current.forEach((input, index) => {
      if (input) {
        input.value = otpValues[index] || "";
      }
    });
  }, [otpValues]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const checkAllInputsFilled = () => {
    const values = inputRefs.current.map((input) => input?.value || "");
    const isValid = values.every((value) => value !== "");
    onChange(values, isValid);
  };

  const handleKeyDown = (e, index) => {
    const allowedKeys = [
      "Backspace",
      "Tab",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
    ];

    if (allowedKeys.includes(e.key) || /^[0-9]$/.test(e.key)) {
      if (e.key === "Backspace" || e.key === "Delete") {
        e.preventDefault();

        inputRefs.current[index]?.value === ""
          ? focusInput(index - 1)
          : (inputRefs.current[index].value = "");

        checkAllInputsFilled();
      } else if (/^[0-9]$/.test(e.key)) {
        e.preventDefault();

        inputRefs.current[index].value = e.key;
        focusInput(index + 1);

        checkAllInputsFilled();
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
