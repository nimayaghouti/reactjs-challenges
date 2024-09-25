import "./Button.scss";

const ReusableButton = ({
  children,
  className,
  onClick,
  type = "button",
  isLoading = false,
  isDisabled = false,
  prependIcon,
  appendIcon,
  maxWidth = "20rem",
  variant = "primary",
  ...otherProps
}) => {
  const buttonStyle = {
    maxWidth,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button button_${variant} ${className}`}
      style={buttonStyle}
      disabled={isDisabled || isLoading}
      {...otherProps}
    >
      {isLoading ? (
        <span className="button__spinner"></span>
      ) : (
        <>
          {prependIcon && <span className="button__icon">{prependIcon}</span>}
          <span>{children}</span>
          {appendIcon && <span className="button__icon">{appendIcon}</span>}
        </>
      )}
    </button>
  );
};

export default ReusableButton;
