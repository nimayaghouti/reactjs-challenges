import Button from "@/components/common/Button";
import "./OTPBox.scss";
const OTPBox = () => {
  return (
    <div className="otp-box">
      <div className="otp-box__form otp-form">
        <div className="otp-form__title">
          The confirmation code was sent to 09121234567
        </div>
        <div className="otp-form__control">
          <div className="otp-form__label">Confirmation Code:</div>
          <div className="otp-form__inputs-group"></div>
          <div className="otp-form__hint">Enter the 6-digit code here</div>
        </div>
        <div className="otp-form__footer">
          <div className="otp-form__timer">
            Remaining time {"02"}:{"00"}
          </div>
          <Button maxWidth="unset">Resend</Button>
        </div>
      </div>
    </div>
  );
};

export default OTPBox;
