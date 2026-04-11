function Button({
  children,
  variant = "primary",
  size,
  type = "button",
  className = "",
  disabled = false,
  onClick,
}) {
  const sizeClass = size ? `btn-${size}` : "";

  return (
    <button
      type={type}
      className={`btn btn-${variant} ${sizeClass} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
