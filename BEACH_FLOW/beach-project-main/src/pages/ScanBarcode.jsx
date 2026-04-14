import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CameraIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
    <circle cx="12" cy="13" r="3"/>
  </svg>
);

const ManualIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
    <circle cx="8.5" cy="8.5" r="1.5"/>
    <polyline points="21 15 16 10 5 21"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

function ScanBarcode() {
  const [reservationCode, setReservationCode] = useState("");
  const [scanMethod, setScanMethod] = useState("manual");
  const navigate = useNavigate();

  const suggestedCodes = ["BEACH-2024-003", "BEACH-2024-002", "BEACH-2024-001"];

  const handleVerify = () => {
    if (reservationCode.trim()) {
      navigate("/scan/results", { state: { code: reservationCode } });
    }
  };

  return (
    <section className="scan-page container-fluid px-0" dir="rtl">
      <header className="dashboard-heading mb-4">
        <h1 className="dashboard-title mb-1">مسح رمز الحجز</h1>
        <p className="dashboard-subtitle mb-0">
          قم بمسح رمز الحجز أو إدخاله يدوياً للتحقق من صلاحية الحجز
        </p>
      </header>

      {/* Scan Method Selection */}
      <div className="card border-0 shadow-sm rounded-4 mb-4">
        <div className="card-body p-4 p-lg-5">
          <h2 className="text-center fs-6 fw-bold text-dark mb-4">
            اختر طريقة المسح
          </h2>
          <div className="row g-3 justify-content-center">
            <div className="col-6">
              <button
                type="button"
                className={`scan-method-btn w-100 p-4 rounded-4 border d-flex flex-column align-items-center gap-3 ${scanMethod === "camera" ? "scan-method-btn--active" : ""}`}
                onClick={() => setScanMethod("camera")}
              >
                <div className={`scan-method-btn__icon rounded-3 d-flex align-items-center justify-content-center ${scanMethod === "camera" ? "scan-method-btn__icon--active" : ""}`}>
                  <CameraIcon />
                </div>
                <span className="text-secondary small">مسح بالكاميرا</span>
              </button>
            </div>
            <div className="col-6">
              <button
                type="button"
                className={`scan-method-btn w-100 p-4 rounded-4 border d-flex flex-column align-items-center gap-3 ${scanMethod === "manual" ? "scan-method-btn--active" : ""}`}
                onClick={() => setScanMethod("manual")}
              >
                <div className={`scan-method-btn__icon rounded-3 d-flex align-items-center justify-content-center ${scanMethod === "manual" ? "scan-method-btn__icon--active" : ""}`}>
                  <ManualIcon />
                </div>
                <span className="text-secondary small">إدخال يدوي</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Code Input */}
      <div className="card border-0 shadow-sm rounded-4">
        <div className="card-body p-4 p-lg-5">
          <h2 className="text-center fs-6 fw-bold text-dark mb-4">
            أدخل رمز الحجز
          </h2>
          <div className="d-flex flex-column gap-3">
            <input
              type="text"
              value={reservationCode}
              onChange={(e) => setReservationCode(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleVerify()}
              placeholder="BEACH-2024-001"
              className="form-control scan-code-input text-center"
              dir="ltr"
              id="scan-code-input"
            />

            <button
              type="button"
              className="btn scan-verify-btn w-100 d-flex align-items-center justify-content-center gap-2 text-white"
              onClick={handleVerify}
              disabled={!reservationCode.trim()}
              id="scan-verify-btn"
            >
              <SearchIcon />
              <span>التحقق من الحجز</span>
            </button>

            <div className="pt-3 border-top">
              <p className="text-center text-muted small mb-3">
                أمثلة يمكن تجربتها
              </p>
              <div className="d-flex justify-content-center gap-2 flex-wrap">
                {suggestedCodes.map((code) => (
                  <button
                    key={code}
                    type="button"
                    className="btn btn-sm scan-suggest-btn"
                    onClick={() => setReservationCode(code)}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScanBarcode;
