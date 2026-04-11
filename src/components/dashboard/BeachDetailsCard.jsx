import Button from "../Button";
import { dashboardAssets } from "../../assets/dashboardAssets";

function BeachDetailsCard({ onEdit }) {
  return (
    <section
      className="card border-0 shadow-sm dashboard-beach-card overflow-hidden"
      dir="rtl"
    >
      <div className="row g-0">
        <div className="col-12 col-xl-6 order-2 order-xl-1">
          <div className="dashboard-beach-card__content p-4 p-lg-5 h-100 text-end">
            <h2 className="dashboard-section-title mb-4">شاطئ الأحلام</h2>

            <div className="d-flex flex-column gap-3 mb-4">
              <div>
                <p className="dashboard-muted mb-1">الموقع</p>
                <h4 className="dashboard-detail mb-0">الساحل الشمالي، مصر</h4>
              </div>
              <div>
                <p className="dashboard-muted mb-1">ساعات العمل</p>
                <h4 className="dashboard-detail mb-0">8:00 ص - 8:00 م</h4>
              </div>
              <div>
                <p className="dashboard-muted mb-1">السعر</p>
                <h4 className="dashboard-detail mb-0">50 جنيه</h4>
              </div>
              <div>
                <p className="dashboard-muted mb-1">التقييم</p>
                <h4 className="dashboard-detail mb-0">
                  4.8 <span className="fs-6 text-secondary">(342 تقييم)</span>
                </h4>
              </div>
            </div>

            <div className="mb-4">
              <p className="dashboard-muted mb-2">الوصف</p>
              <p className="text-secondary mb-0">
                شاطئ خاص فاخر يوفر تجربة استرخاء فريدة مع مياه صافية ورمال ناعمة
                وأنشطة مائية متنوعة.
              </p>
            </div>

            <div className="mb-3">
              <p className="dashboard-muted mb-2">المرافق</p>
              <div className="d-flex justify-content-end flex-wrap gap-2">
                <span className="dashboard-facility-badge">كراسي استرخاء</span>
                <span className="dashboard-facility-badge">شماسي</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-6 order-1 order-xl-2 position-relative">
          <img
            src={dashboardAssets.beachCover}
            alt="شاطئ الأحلام"
            className="dashboard-beach-card__image"
          />
          <Button
            variant="light"
            className="dashboard-edit-btn border border-info-subtle text-info"
            onClick={onEdit}
          >
            تعديل البيانات
          </Button>
        </div>
      </div>
    </section>
  );
}

export default BeachDetailsCard;
