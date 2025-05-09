function Button({ children, handleOperation, id, style }) {
  return (
    <button style={style} onClick={() => handleOperation(id)}>
      {children}
    </button>
  );
}

export default Button;
