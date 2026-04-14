import Button from "../Button";

function AddBeachForm({
  values,
  errors,
  canSubmit,
  isSubmitted,
  onChange,
  onSubmit,
  onCancel,
}) {
  return (
    <form className="add-beach-form" dir="rtl" onSubmit={onSubmit} noValidate>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h2 className="add-beach-form__title mb-0">
          الخطوة 1: المعلومات الأساسية
        </h2>
        <span className="badge text-primary border border-primary-subtle bg-primary-subtle">
          مطلوب
        </span>
      </div>

      <div className="alert add-beach-form__tip mb-4 text-end" role="note">
        نصيحة: تأكد من إدخال معلومات دقيقة وواضحة حتى يتمكن الزوار من فهم تفاصيل
        الشاطئ بسهولة.
      </div>

      <div className="mb-3">
        <label htmlFor="beachName" className="form-label fw-bold">
          اسم الشاطئ *
        </label>
        <input
          id="beachName"
          name="beachName"
          type="text"
          className={`form-control add-beach-form__input ${
            errors.beachName ? "is-invalid" : ""
          }`}
          value={values.beachName}
          onChange={onChange}
          placeholder="مثال: شاطئ الأحلام"
        />
        <div className="form-text text-end">
          اسم واضح يسهل تذكره وبحث الزوار عنه
        </div>
        {errors.beachName ? (
          <div className="invalid-feedback d-block text-end">
            {errors.beachName}
          </div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="location" className="form-label fw-bold">
          الموقع الجغرافي *
        </label>
        <input
          id="location"
          name="location"
          type="text"
          className={`form-control add-beach-form__input ${
            errors.location ? "is-invalid" : ""
          }`}
          value={values.location}
          onChange={onChange}
          placeholder="مثال: الساحل الشمالي، مصر"
        />
        <div className="form-text text-end">حدد المدينة أو المنطقة بدقة</div>
        {errors.location ? (
          <div className="invalid-feedback d-block text-end">
            {errors.location}
          </div>
        ) : null}
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label fw-bold">
          وصف الشاطئ *
        </label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className={`form-control add-beach-form__input ${
            errors.description ? "is-invalid" : ""
          }`}
          value={values.description}
          onChange={onChange}
          placeholder="اكتب وصفاً جذاباً للشاطئ"
        />
        <div className="form-text text-end">
          وصف مختصر وجذاب يشجع الزوار على الحجز
        </div>
        {errors.description ? (
          <div className="invalid-feedback d-block text-end">
            {errors.description}
          </div>
        ) : null}
      </div>

      <h3 className="add-beach-form__subheading mt-4 mb-3">الأسعار والسعة</h3>
      <div className="row g-3 mb-3">
        <div className="col-12 col-md-6">
          <label htmlFor="ticketPrice" className="form-label fw-bold">
            سعر التذكرة لليوم الواحد (بالجنيه) *
          </label>
          <input
            id="ticketPrice"
            name="ticketPrice"
            type="number"
            min="0"
            className={`form-control add-beach-form__input ${
              errors.ticketPrice ? "is-invalid" : ""
            }`}
            value={values.ticketPrice}
            onChange={onChange}
            placeholder="200"
          />
          {errors.ticketPrice ? (
            <div className="invalid-feedback d-block text-end">
              {errors.ticketPrice}
            </div>
          ) : null}
        </div>
        <div className="col-12 col-md-6">
          <label htmlFor="capacity" className="form-label fw-bold">
            السعة القصوى (عدد الأشخاص) *
          </label>
          <input
            id="capacity"
            name="capacity"
            type="number"
            min="1"
            className={`form-control add-beach-form__input ${
              errors.capacity ? "is-invalid" : ""
            }`}
            value={values.capacity}
            onChange={onChange}
            placeholder="100"
          />
          <div className="form-text text-end">الحد الأقصى للزوار</div>
          {errors.capacity ? (
            <div className="invalid-feedback d-block text-end">
              {errors.capacity}
            </div>
          ) : null}
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="imageUrl" className="form-label fw-bold">
          صورة الشاطئ
        </label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="url"
          className="form-control add-beach-form__input"
          value={values.imageUrl}
          onChange={onChange}
          placeholder="https://example.com/beach-image.jpg"
        />
        <div className="form-text text-end">
          رابط صورة واضحة وجذابة للشاطئ (اختياري)
        </div>
      </div>

      <section className="add-beach-form__review rounded-4 p-3 p-lg-4 mb-3 text-white">
        <h3 className="fw-bold mb-2">الخطوة 2: المراجعة والحفظ</h3>
        <p className="mb-0 text-white-50">
          تأكد من صحة البيانات قبل الحفظ. بعد الحفظ، سيظهر الشاطئ في قائمة
          الشواطئ المتاحة للحجز.
        </p>
      </section>

      {isSubmitted ? (
        <div className="alert alert-success text-end mb-3">
          تم حفظ بيانات الشاطئ بنجاح.
        </div>
      ) : null}

      <div className="d-flex justify-content-between flex-row-reverse flex-wrap gap-2">
        <Button
          type="button"
          variant="outline-secondary"
          className="px-4"
          onClick={onCancel}
        >
          إلغاء
        </Button>
        <Button
          type="submit"
          className="add-beach-form__submit px-4"
          disabled={!canSubmit}
        >
          + حفظ وإضافة الشاطئ
        </Button>
      </div>
    </form>
  );
}

export default AddBeachForm;
