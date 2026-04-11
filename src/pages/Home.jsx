import { useMemo, useState } from "react";
import Modal from "../components/Modal";
import Loader from "../components/Loader";
import BeachDetailsCard from "../components/dashboard/BeachDetailsCard";
import StatsSection from "../components/dashboard/StatsSection";
import {
  BookingIcon,
  RatingIcon,
  RevenueIcon,
  UsersIcon,
} from "../components/dashboard/MetricIcons";
import useFetch from "../hooks/useFetch";
import { getPosts } from "../services/api";

function Home() {
  const { data: posts, isLoading, error, refetch } = useFetch(getPosts);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const stats = useMemo(() => {
    const bookingRatio = posts.length
      ? `${Math.min(posts.length * 8, 47)} %`
      : "47 %";

    return [
      {
        id: "today-booking",
        title: "حجوزات اليوم",
        value: bookingRatio,
        subtitle: "من 100 مكان",
        borderClass: "border-success-subtle",
        iconClass: "bg-success-subtle text-success",
        icon: <BookingIcon />,
      },
      {
        id: "avg-rate",
        title: "متوسط التقييم",
        value: "4.7",
        subtitle: "من 342 تقييم",
        borderClass: "border-warning-subtle",
        iconClass: "bg-warning-subtle text-warning",
        icon: <RatingIcon />,
      },
      {
        id: "today-revenue",
        title: "ايرادات اليوم",
        value: "8,450 جنيه",
        subtitle: "",
        borderClass: "border-primary-subtle",
        iconClass: "bg-primary-subtle text-primary",
        icon: <RevenueIcon />,
      },
      {
        id: "visitors",
        title: "حجوزات اليوم",
        value: `${posts.length || 47}`,
        subtitle: "",
        borderClass: "border-info-subtle",
        iconClass: "bg-info-subtle text-info",
        icon: <UsersIcon />,
      },
    ];
  }, [posts.length]);

  return (
    <section className="dashboard-page container-fluid px-0" dir="rtl">
      <header className="dashboard-heading mb-4">
        <h1 className="dashboard-title mb-1">لوحة التحكم الإدارية</h1>
        <p className="dashboard-subtitle mb-0">
          إليك ملخص شامل عن أداء شاطئك اليوم
        </p>
      </header>

      {isLoading ? (
        <div className="mb-3">
          <Loader message="جار تحميل بيانات لوحة التحكم..." />
        </div>
      ) : null}

      {error ? (
        <div
          className="alert alert-danger d-flex justify-content-between align-items-center gap-2 mb-3"
          role="alert"
        >
          <span>{error}</span>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={refetch}
          >
            إعادة المحاولة
          </button>
        </div>
      ) : null}

      <StatsSection stats={stats} />

      <BeachDetailsCard onEdit={() => setIsEditModalOpen(true)} />

      <Modal
        title="تعديل بيانات الشاطئ"
        show={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      >
        <p className="mb-0 text-end">
          هذه نافذة تجريبية. يمكنك ربطها لاحقًا بنموذج تعديل حقيقي أو API.
        </p>
      </Modal>

      <div className="dashboard-help-banner mt-4 p-3 p-lg-4 rounded-4 text-white d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-2">
        <div className="text-end">
          <h5 className="mb-1 fw-bold">مساعدة وإرشادات</h5>
          <p className="mb-0 text-white-50">
            لأي استفسار أو مساعدة تقنية، تواصل مع الدعم الفني.
          </p>
        </div>
        <button
          type="button"
          className="btn btn-light btn-sm align-self-end align-self-lg-auto"
        >
          تواصل الآن
        </button>
      </div>
    </section>
  );
}

export default Home;
