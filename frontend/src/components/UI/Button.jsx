function Button({ children, cssClasses, textOnly, ...props }) {
  return (
    <button
      {...props}
      className={textOnly ? `text-button ${cssClasses}` : "button"}
    >
      {children}
    </button>
  );
}

export default Button;
