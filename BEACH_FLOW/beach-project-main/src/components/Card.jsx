function Card({ title, text, children, className = "" }) {
  return (
    <article className={`card shadow-sm h-100 ${className}`.trim()}>
      <div className="card-body d-flex flex-column gap-2">
        {title ? <h5 className="card-title mb-1">{title}</h5> : null}
        {text ? <p className="card-text text-secondary">{text}</p> : null}
        {children}
      </div>
    </article>
  );
}

export default Card;
