import MetricCard from "./MetricCard";

function StatsSection({ stats }) {
  return (
    <section className="row g-3 g-xl-4 mb-4" aria-label="مؤشرات لوحة التحكم">
      {stats.map((statItem) => (
        <div key={statItem.id} className="col-12 col-sm-6 col-xxl-3">
          <MetricCard
            title={statItem.title}
            value={statItem.value}
            subtitle={statItem.subtitle}
            icon={statItem.icon}
            borderClass={statItem.borderClass}
            iconClass={statItem.iconClass}
          />
        </div>
      ))}
    </section>
  );
}

export default StatsSection;
