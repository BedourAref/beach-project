import { useMemo, useState } from "react";
import { loginAdmin } from "../services/api";

const INITIAL_VALUES = {
  username: "",
  password: "",
};

function useAdminLoginForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const canSubmit = useMemo(() => {
    return (
      values.username.trim().length > 0 && values.password.trim().length > 0
    );
  }, [values.password, values.username]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((previousState) => !previousState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!values.username.trim()) {
      nextErrors.username = "يرجى إدخال اسم المستخدم";
    }

    if (!values.password.trim()) {
      nextErrors.password = "يرجى إدخال كلمة المرور";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      await loginAdmin(values.username.trim(), values.password.trim());
      setStatusMessage("تم تسجيل الدخول بنجاح");
      // Navigate to dashboard after successful login
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "فشل تسجيل الدخول. تأكد من البيانات وحاول مرة أخرى.";
      setErrors({ username: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    canSubmit,
    isSubmitting,
    isPasswordVisible,
    statusMessage,
    handleChange,
    handleSubmit,
    togglePasswordVisibility,
  };
}

export default useAdminLoginForm;
