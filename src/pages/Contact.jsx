import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import AddBeachForm from "../components/dashboard/AddBeachForm";
import AddBeachHero from "../components/dashboard/AddBeachHero";
import useAddBeachForm from "../hooks/useAddBeachForm";

function Contact() {
  const location = useLocation();

  const editValues = useMemo(() => {
    if (location.state?.mode !== "edit" || !location.state?.beach) {
      return null;
    }

    const beach = location.state.beach;

    return {
      beachName: beach.beachName ?? "",
      location: beach.location ?? "",
      description: beach.description ?? "",
      ticketPrice: beach.ticketPrice ?? "",
      capacity: beach.capacity ?? "",
      imageUrl: beach.imageUrl ?? "",
    };
  }, [location.state]);

  const isEditMode = Boolean(editValues);

  const {
    values,
    errors,
    canSubmit,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
  } = useAddBeachForm(editValues, { isEditMode });

  return (
    <section className="add-beach-page container-fluid px-0">
      <AddBeachHero isEditMode={isEditMode} />
      <AddBeachForm
        isEditMode={isEditMode}
        values={values}
        errors={errors}
        canSubmit={canSubmit}
        isSubmitted={isSubmitted}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={resetForm}
      />
    </section>
  );
}

export default Contact;
