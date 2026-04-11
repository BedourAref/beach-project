function MetricCard({
  title,
  value,
  subtitle,
  icon,
  iconSrc,
  iconAlt,
  borderClass = "",
  iconClass = "",
}) {
  return (
    <article
      className={`dashboard-metric card border-2 shadow-sm h-100 ${borderClass}`.trim()}
    >
      <div className="card-body text-center d-flex flex-column align-items-center justify-content-center gap-2 py-4">
        <div
          className={`dashboard-metric__icon rounded-3 ${iconClass}`.trim()}
          aria-hidden="true"
        >
          {iconSrc ? (
            <img
              src={iconSrc}
              alt={iconAlt || ""}
              className="dashboard-metric__icon-image"
            />
          ) : (
            icon
          )}
        </div>
        <p className="dashboard-muted mb-0">{title}</p>
        <h3 className="dashboard-metric__value mb-0">{value}</h3>
        {subtitle ? <small className="text-secondary">{subtitle}</small> : null}
      </div>
    </article>
  );
}

export default MetricCard;
