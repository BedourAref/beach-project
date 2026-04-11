import AddBeachForm from "../components/dashboard/AddBeachForm";
import AddBeachHero from "../components/dashboard/AddBeachHero";
import useAddBeachForm from "../hooks/useAddBeachForm";

function Contact() {
  const {
    values,
    errors,
    canSubmit,
    isSubmitted,
    handleChange,
    handleSubmit,
    resetForm,
  } = useAddBeachForm();

  return (
    <section className="add-beach-page container-fluid px-0">
      <AddBeachHero />
      <AddBeachForm
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
