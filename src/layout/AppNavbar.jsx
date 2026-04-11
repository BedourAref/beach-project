function AppNavbar({ onToggleSidebar }) {
  const today = new Intl.DateTimeFormat("ar-EG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <nav className="dashboard-navbar border-bottom bg-white" dir="rtl">
      <div className="container-fluid py-3 px-3 px-lg-4 d-flex align-items-center justify-content-between">
        <div className="text-end">
          <h2 className="dashboard-navbar__welcome mb-1">
            مرحباً بك، المدير الرئيسي
          </h2>
          <p className="dashboard-navbar__date mb-0">{today}</p>
        </div>

        <button
          className="btn btn-outline-primary d-lg-none"
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default AppNavbar;
