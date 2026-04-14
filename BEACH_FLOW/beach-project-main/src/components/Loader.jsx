function Loader({ message = "Loading..." }) {
  return (
    <div
      className="d-flex align-items-center gap-2"
      role="status"
      aria-live="polite"
    >
      <div className="spinner-border spinner-border-sm text-primary" />
      <span className="text-secondary">{message}</span>
    </div>
  );
}

export default Loader;
