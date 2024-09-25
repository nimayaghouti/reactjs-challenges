import { forwardRef } from "react";
import "./Input.scss";

const Input = forwardRef(
  ({ label, error, maxWidth = "20rem", className, ...otherProps }, ref) => {
    const inputStyle = {
      maxWidth,
    };
    return (
      <div className={`form-group ${className}`} style={inputStyle}>
        {label && (
          <label className="form-group__label" htmlFor={otherProps.id}>
            {label}
          </label>
        )}
        <input className="form-group__input" ref={ref} {...otherProps} />
        {error && <div className="form-group__error">{error.message}</div>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
