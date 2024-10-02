import { useState, useMemo } from "react";
import Button from "@/components/common/Button";
import OTPInputsGroup from "./OTPInputsGroup";
import Timer from "../../common/Timer";
import "./OTPBox.scss";

const OTPBox = () => {
  const [otpValues, setOtpValues] = useState([]);
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [isTimerFinished, setIsTimerFinished] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const isDisabled = !isOtpValid && !isTimerFinished;
  const otpSubmitText = isOtpValid ? "Confirm" : "Resend";

  const handleOtpChange = (values, isValid) => {
    setOtpValues(values);
    setIsOtpValid(isValid);
  };

  const handleTimerFinish = (finished) => {
    setIsTimerFinished(finished);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log(otpValues);

    setTimeout(() => {
      setIsLoading(false);

      setOtpValues([]);
      setIsOtpValid(false);

      setIsTimerFinished(false);
      setTimerKey((prevKey) => prevKey + 1);
    }, 3000);
  };

  const timerElement = useMemo(
    () => (
      <Timer
        key={timerKey}
        minutes={0}
        seconds={10}
        onFinish={handleTimerFinish}
      />
    ),
    [timerKey]
  );

  return (
    <div className="otp-box">
      <form className="otp-box__form otp-form" onSubmit={handleSubmit}>
        <div className="otp-form__title">
          The confirmation code was sent to 09121234567
        </div>
        <div className="otp-form__control">
          <div className="otp-form__label">Confirmation Code:</div>
          <div className="otp-form__inputs-group">
            <OTPInputsGroup
              inputsCount={6}
              onChange={handleOtpChange}
              otpValues={otpValues}
            />
          </div>
          <div className="otp-form__hint">Enter the 6-digit code here</div>
        </div>
        <div className="otp-form__footer">
          <div className="otp-form__timer">
            Remaining time &thinsp;{timerElement}
          </div>
          <Button
            maxWidth="unset"
            isDisabled={isDisabled}
            isLoading={isLoading}
            type="submit"
          >
            {otpSubmitText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OTPBox;
