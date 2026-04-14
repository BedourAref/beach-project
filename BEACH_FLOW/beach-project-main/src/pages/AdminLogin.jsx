import AdminLoginCard from "../components/admin-login/AdminLoginCard";
import useAdminLoginForm from "../hooks/useAdminLoginForm";

function AdminLogin() {
  const {
    values,
    errors,
    canSubmit,
    isSubmitting,
    isPasswordVisible,
    statusMessage,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
  } = useAdminLoginForm();

  return (
    <section className="admin-login-page d-flex align-items-center justify-content-center">
      <AdminLoginCard
        values={values}
        errors={errors}
        canSubmit={canSubmit}
        isSubmitting={isSubmitting}
        isPasswordVisible={isPasswordVisible}
        statusMessage={statusMessage}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onTogglePassword={togglePasswordVisibility}
      />
    </section>
  );
}

export default AdminLogin;
