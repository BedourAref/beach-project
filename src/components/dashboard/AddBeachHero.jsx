import { Link } from "react-router-dom";

function AddBeachHero() {
  return (
    <section className="mb-4" dir="rtl">
      <div className="text-end mb-2">
        <Link to="/" className="add-beach-hero__back-link text-decoration-none">
          العودة للوحة التحكم
        </Link>
      </div>

      <header className="add-beach-hero rounded-4 p-3 p-lg-4 text-white">
        <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-3">
          <div className="d-flex align-items-center gap-2">
            <div className="add-beach-hero__plus">+</div>
            <div className="text-end">
              <h1 className="add-beach-hero__title mb-1">إضافة شاطئ جديد</h1>
              <p className="add-beach-hero__subtitle mb-0">
                املأ البيانات التالية لإضافة شاطئ جديد إلى النظام. جميع الحقول
                المميزة بعلامة * مطلوبة.
              </p>
            </div>
          </div>

          <div className="add-beach-hero__badge" aria-hidden="true">
            +
          </div>
        </div>

        <div className="row g-2 add-beach-hero__steps">
          <div className="col-12 col-md-6">
            <div className="add-beach-step add-beach-step--active">
              <span className="add-beach-step__number">1</span>
              <div className="text-end">
                <p className="mb-0 fw-bold">الخطوة 1</p>
                <small>المعلومات الأساسية</small>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="add-beach-step">
              <span className="add-beach-step__number">2</span>
              <div className="text-end">
                <p className="mb-0 fw-bold">الخطوة 2</p>
                <small>المراجعة والحفظ</small>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default AddBeachHero;
