const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ChairIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/>
    <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0z"/>
    <path d="M5 18v2"/><path d="M19 18v2"/>
  </svg>
);

const UmbrellaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const DollarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const AlertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const reservations = [
  {
    id: "BK-2024-UN-793",
    status: "pending",
    name: "محمد تامر المحمد",
    email: "mohamed@example.com",
    date: "16 يناير 2025",
    time: "8:00 صباحاً - 2:00 مساءً",
    attendees: 4,
    umbrellas: 2,
    chairs: 4,
    total: 500,
  },
  {
    id: "BK-2024-UN-781",
    status: "confirmed",
    name: "مصطفى أحمد محمد",
    email: "mostafa@example.com",
    date: "16 يناير 2025",
    time: "8:00 صباحاً - 2:00 مساءً",
    attendees: 4,
    umbrellas: 2,
    chairs: 4,
    total: 500,
  },
];

function StatusBadge({ status }) {
  if (status === "pending") {
    return (
      <span className="reservation-badge reservation-badge--pending d-inline-flex align-items-center gap-2 px-3 py-1 rounded-3">
        <AlertIcon />
        <span className="small">في الانتظار</span>
      </span>
    );
  }
  return (
    <span className="reservation-badge reservation-badge--confirmed d-inline-flex align-items-center gap-2 px-3 py-1 rounded-3">
      <CheckIcon />
      <span className="small">تم الدخول</span>
    </span>
  );
}

function ReservationCard({ reservation }) {
  return (
    <div
      className={`card border-0 shadow-sm rounded-4 mb-4 reservation-card ${reservation.status === "confirmed" ? "reservation-card--confirmed" : ""}`}
    >
      <div className="card-body p-4">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-2">
            <span className="text-secondary small font-monospace">
              {reservation.id}
            </span>
            <span className="reservation-info-dot d-inline-flex align-items-center justify-content-center rounded-circle">
              <span className="text-white" style={{ fontSize: "0.65rem" }}>
                ℹ
              </span>
            </span>
          </div>
          <StatusBadge status={reservation.status} />
        </div>

        {/* Details */}
        <div className="d-flex flex-column gap-3">
          {/* Name & Email */}
          <div className="row g-3">
            <div className="col-6 text-end">
              <div className="text-muted mb-1" style={{ fontSize: "0.7rem" }}>
                معلومات المستفيد
              </div>
              <div className="d-flex align-items-center justify-content-end gap-2">
                <span className="small fw-semibold text-dark">
                  {reservation.name}
                </span>
                <span className="reservation-icon">
                  <UserIcon />
                </span>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="d-flex align-items-center justify-content-end gap-2">
                <span className="small text-secondary font-monospace">
                  {reservation.email}
                </span>
                <span className="reservation-icon">
                  <MailIcon />
                </span>
              </div>
            </div>
          </div>

          {/* Time & Date */}
          <div className="row g-3">
            <div className="col-6 text-end">
              <div className="d-flex align-items-center justify-content-end gap-2">
                <span className="small fw-semibold text-dark">
                  {reservation.time}
                </span>
                <span className="reservation-icon">
                  <ClockIcon />
                </span>
              </div>
            </div>
            <div className="col-6 text-end">
              <div className="d-flex align-items-center justify-content-end gap-2">
                <span className="small fw-semibold text-dark">
                  التاريخ: {reservation.date}
                </span>
                <span className="reservation-icon">
                  <CalendarIcon />
                </span>
              </div>
            </div>
          </div>

          {/* Chairs, Umbrellas, Attendees */}
          <div className="row g-3">
            <div className="col-4 text-end">
              <div className="d-flex align-items-center justify-content-end gap-2">
                <div className="d-flex align-items-center gap-1">
                  <span className="small fw-semibold text-dark">
                    {reservation.chairs}
                  </span>
                  <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                    كراسي
                  </span>
                </div>
                <span className="reservation-icon">
                  <ChairIcon />
                </span>
              </div>
            </div>
            <div className="col-4 text-end">
              <div className="d-flex align-items-center justify-content-end gap-2">
                <div className="d-flex align-items-center gap-1">
                  <span className="small fw-semibold text-dark">
                    {reservation.umbrellas}
                  </span>
                  <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                    شماسي
                  </span>
                </div>
                <span className="reservation-icon">
                  <UmbrellaIcon />
                </span>
              </div>
            </div>
            <div className="col-4 text-end">
              <div className="d-flex align-items-center justify-content-end gap-2">
                <div className="d-flex align-items-center gap-1">
                  <span className="small fw-semibold text-dark">
                    {reservation.attendees}
                  </span>
                  <span className="text-muted" style={{ fontSize: "0.7rem" }}>
                    عدد الحضور
                  </span>
                </div>
                <span className="reservation-icon">
                  <UsersIcon />
                </span>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="pt-3 border-top">
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <span className="reservation-icon">
                  <DollarIcon />
                </span>
                <span className="small text-secondary">الإجمالي</span>
              </div>
              <span className="fw-bold text-success">
                {reservation.total} جنيه
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reservations() {
  return (
    <section className="reservations-page container-fluid px-0" dir="rtl">
      <header className="dashboard-heading mb-4">
        <h1 className="dashboard-title mb-1">قائمة الحجوزات</h1>
        <p className="dashboard-subtitle mb-0">
          جميع الحجوزات مع تفاصيلها الكاملة
        </p>
      </header>

      {reservations.map((r) => (
        <ReservationCard key={r.id} reservation={r} />
      ))}
    </section>
  );
}

export default Reservations;
