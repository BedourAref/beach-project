import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import SecurityBadge from "./SecurityBadge";

function AdminLoginCard({
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
    <section
      className="admin-login__card bg-white shadow-sm"
      dir="rtl"
      aria-labelledby="admin-login-heading"
    >
      <LoginHeader />
      <div className="admin-login__body">
        <LoginForm
          values={values}
          errors={errors}
          canSubmit={canSubmit}
          isSubmitting={isSubmitting}
          isPasswordVisible={isPasswordVisible}
          statusMessage={statusMessage}
          onChange={onChange}
          onSubmit={onSubmit}
          onTogglePassword={onTogglePassword}
        />
        <hr className="my-4 text-secondary-subtle" />
        <SecurityBadge />
      </div>
    </section>
  );
}

export default AdminLoginCard;
