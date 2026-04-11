import { useMemo, useState } from "react";

const INITIAL_VALUES = {
  beachName: "",
  location: "",
  description: "",
  ticketPrice: "",
  capacity: "",
  imageUrl: "",
};

function useAddBeachForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      values.beachName.trim() &&
      values.location.trim() &&
      values.description.trim() &&
      values.ticketPrice.trim() &&
      values.capacity.trim()
    );
  }, [values]);

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

  const resetForm = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};

    if (!values.beachName.trim()) {
      nextErrors.beachName = "اسم الشاطئ مطلوب";
    }
    if (!values.location.trim()) {
      nextErrors.location = "الموقع الجغرافي مطلوب";
    }
    if (!values.description.trim()) {
      nextErrors.description = "وصف الشاطئ مطلوب";
    }
    if (!values.ticketPrice.trim()) {
      nextErrors.ticketPrice = "سعر التذكرة مطلوب";
    }
    if (!values.capacity.trim()) {
      nextErrors.capacity = "السعة القصوى مطلوبة";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return {
    values,
    errors,
    canSubmit,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export default useAddBeachForm;
