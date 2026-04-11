import { adminLoginAssets } from "../../assets/adminLoginAssets";

function SecurityBadge() {
  return (
    <div className="admin-login__security-note d-flex align-items-center justify-content-center gap-2">
      <span>اتصال آمن ومشفر</span>
      <img
        src={adminLoginAssets.lockIcon}
        alt="Lock icon"
        width="16"
        height="16"
      />
    </div>
  );
}

export default SecurityBadge;
