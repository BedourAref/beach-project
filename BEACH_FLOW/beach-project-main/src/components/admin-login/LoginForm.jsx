import Loader from "../Loader";
import { adminLoginAssets } from "../../assets/adminLoginAssets";

function LoginForm({
  values,
  errors,
  canSubmit,
  isSubmitting,
  isPasswordVisible,
  statusMessage,
  onChange,
  onSubmit,
  onTogglePassword,
}) {
  return (
    <form className="admin-login__form" onSubmit={onSubmit} noValidate>
      <div className="mb-4">
        <label htmlFor="username" className="form-label admin-login__label">
          اسم المستخدم
        </label>
        <div className="position-relative">
          <input
            id="username"
            name="username"
            type="text"
            className={`form-control admin-login__input ${
              errors.username ? "is-invalid" : ""
            }`}
            placeholder="أدخل اسم المستخدم"
            value={values.username}
            onChange={onChange}
            autoComplete="username"
          />
          <img
            src={adminLoginAssets.userIcon}
            alt="User icon"
            className="admin-login__input-icon-end"
            width="20"
            height="20"
          />
          {errors.username ? (
            <div className="invalid-feedback text-end d-block">
              {errors.username}
            </div>
          ) : null}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="form-label admin-login__label">
          كلمة المرور
        </label>
        <div className="position-relative">
          <input
            id="password"
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            className={`form-control admin-login__input admin-login__password-input ${
              errors.password ? "is-invalid" : ""
            }`}
            placeholder="أدخل كلمة المرور"
            value={values.password}
            onChange={onChange}
            autoComplete="current-password"
          />
          <img
            src={adminLoginAssets.keyIcon}
            alt="Password key icon"
            className="admin-login__input-icon-end"
            width="20"
            height="20"
          />
          <button
            type="button"
            className="btn admin-login__eye-btn"
            onClick={onTogglePassword}
            aria-label={
              isPasswordVisible ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
            }
          >
            <img
              src={adminLoginAssets.eyeIcon}
              alt="Toggle password visibility"
              width="20"
              height="20"
            />
          </button>
          {errors.password ? (
            <div className="invalid-feedback text-end d-block">
              {errors.password}
            </div>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="btn admin-login__submit-btn w-100 fw-bold"
        disabled={!canSubmit || isSubmitting}
      >
        {isSubmitting ? <Loader message="جار التحقق..." /> : "تسجيل الدخول"}
      </button>

      {statusMessage ? (
        <p className="alert alert-success mt-3 mb-0 text-end py-2">
          {statusMessage}
        </p>
      ) : null}
    </form>
  );
}

export default LoginForm;
