import { NavLink } from "react-router-dom";
import { dashboardAssets } from "../assets/dashboardAssets";

function Sidebar({ isOpen, onClose }) {
  const navItems = [
    { label: "لوحة التحكم", to: "/" },
    { label: "الحجوزات", to: "/bookings" },
    { label: "إضافة شاطئ", to: "/beaches/add" },
    { label: "تسجيل الدخول", to: "/admin-login" },
  ];

  return (
    <>
      <aside
        className={`app-sidebar dashboard-sidebar ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
        dir="rtl"
      >
        <div className="dashboard-sidebar__brand p-3 p-lg-4">
          <div className="d-flex align-items-center justify-content-between gap-2">
            <h3 className="mb-0 dashboard-sidebar__title">إدارة الشواطئ</h3>
            <div className="position-relative dashboard-sidebar__logo-wrap">
              <img
                src={dashboardAssets.logoWave}
                alt=""
                className="dashboard-sidebar__logo-wave"
                aria-hidden="true"
              />
              <img
                src={dashboardAssets.beachThumb}
                alt="شعار"
                className="dashboard-sidebar__logo"
              />
            </div>
          </div>
          <p className="dashboard-sidebar__subtitle mb-0 mt-1">نظام متكامل</p>
        </div>

        <nav className="nav flex-column px-3 px-lg-4 py-3 gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className="dashboard-sidebar__link nav-link"
              onClick={onClose}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="dashboard-sidebar__help m-3 m-lg-4 p-3 rounded-4 text-white">
          <h6 className="mb-1 fw-bold">مساعدة وإرشادات</h6>
          <p className="mb-0 small text-white-50">
            لأي استفسار أو مساعدة تقنية، تواصل مع الدعم الفني.
          </p>
        </div>
      </aside>

      {isOpen ? (
        <div className="sidebar-backdrop d-lg-none" onClick={onClose} />
      ) : null}
    </>
  );
}

export default Sidebar;
