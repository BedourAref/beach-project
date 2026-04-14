function Footer() {
  return (
    <footer className="dashboard-footer border-top" dir="rtl">
      <div className="container-fluid px-3 px-lg-4 py-3 d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-1">
        <span className="text-secondary small">
          حقوق النشر {new Date().getFullYear()} إدارة الشواطئ
        </span>
        <span className="text-secondary small">
          واجهة تشغيلية مبنية باستخدام React و Bootstrap 5
        </span>
      </div>
    </footer>
  );
}

export default Footer;
