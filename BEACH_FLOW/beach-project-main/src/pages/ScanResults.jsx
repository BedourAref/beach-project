import { useLocation, useNavigate } from "react-router-dom";

const CheckIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
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
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

function ScanResults() {
  const navigate = useNavigate();
  const location = useLocation();
  const code = location.state?.code || "BEACH-2024-001";

  // Mock reservation data
  const reservation = {
    name: "خالد محمود",
    beach: "شاطئ الأحلام",
    beachArea: "الساحل الشمالي",
    date: "2024-04-05",
    chairs: 6,
    umbrellas: 2,
    attendees: 6,
    price: 70,
  };

  const detailItems = [
    { label: "اسم المستفيد", value: reservation.name, icon: <UserIcon /> },
    {
      label: "الشاطئ",
      value: reservation.beach,
      sub: reservation.beachArea,
      icon: <MapPinIcon />,
    },
    { label: "التاريخ", value: reservation.date, icon: <CalendarIcon /> },
    { label: "الكراسي", value: reservation.chairs, icon: <ChairIcon /> },
    { label: "الشماسي", value: reservation.umbrellas, icon: <UmbrellaIcon /> },
    {
      label: "عدد الحضور",
      value: `${reservation.attendees} أشخاص`,
      icon: <UsersIcon />,
    },
    { label: "السعر", value: reservation.price, icon: <DollarIcon /> },
  ];

  return (
    <section className="scan-results-page container-fluid px-0" dir="rtl">
      <header className="dashboard-heading mb-4">
        <h1 className="dashboard-title mb-1">نتيجة التحقق</h1>
        <p className="dashboard-subtitle mb-0">
          تفاصيل الحجز بعد التحقق من رمز الحجز
        </p>
      </header>

      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-4 p-lg-5">
          {/* Success header */}
          <div className="d-flex flex-column align-items-center mb-4">
            <div className="scan-result-success-circle mb-3">
              <CheckIcon />
            </div>
            <h2 className="fs-5 fw-bold text-dark mb-1">حجز صالح ✓</h2>
            <p className="text-muted small mb-0">
              تم التحقق من الحجز بنجاح
            </p>
          </div>

          {/* Details grid */}
          <div className="scan-result-details rounded-4 p-4 mb-4">
            <div className="row g-3">
              {detailItems.map((item) => (
                <div className="col-6" key={item.label}>
                  <div className="text-end">
                    <div className="d-flex align-items-center justify-content-end gap-2 mb-1">
                      <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                        {item.label}
                      </span>
                      <span className="scan-result-icon">{item.icon}</span>
                    </div>
                    <p className="mb-0 small fw-semibold text-dark">
                      {item.value}
                    </p>
                    {item.sub ? (
                      <p className="mb-0 text-muted" style={{ fontSize: "0.75rem" }}>
                        {item.sub}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success badge */}
          <div className="scan-result-badge rounded-3 p-3 mb-4 text-center">
            <p className="mb-0 small fw-semibold">✓ تم الدخول بنجاح</p>
            <p className="mb-0 text-muted" style={{ fontSize: "0.75rem" }}>
              رقم الحجز: {code}
            </p>
          </div>

          {/* Actions */}
          <div className="row g-3">
            <div className="col-6">
              <button
                type="button"
                className="btn scan-verify-btn w-100 text-white py-3 rounded-4"
                onClick={() => navigate("/scan")}
                id="scan-another-btn"
              >
                مسح حجز آخر
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className="btn btn-outline-primary w-100 py-3 rounded-4 scan-outline-btn"
                onClick={() => navigate("/reservations")}
                id="view-reservations-btn"
              >
                عرض الحجوزات
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScanResults;
