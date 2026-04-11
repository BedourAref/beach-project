import { adminLoginAssets } from "../../assets/adminLoginAssets";

function LoginHeader() {
  return (
    <header className="admin-login__hero text-center text-white">
      <div className="admin-login__shield-wrapper mx-auto">
        <img
          src={adminLoginAssets.shieldIcon}
          alt="Security icon"
          className="admin-login__hero-icon"
        />
      </div>
      <h1 id="admin-login-heading" className="admin-login__title mb-1">
        تسجيل دخول الإدارة
      </h1>
      <p className="admin-login__subtitle mb-0">إدارة الشواطئ والحجوزات</p>
    </header>
  );
}

export default LoginHeader;
