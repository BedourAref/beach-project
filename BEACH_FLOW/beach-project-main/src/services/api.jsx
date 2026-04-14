import axios from "axios";

// ══════════════════════════════════════════════════════════════════════
//  غيّر الـ BASE_URL دي لرابط الباک‌اند الحقيقي بتاعك
// ══════════════════════════════════════════════════════════════════════
const BASE_URL = "https://your-api-url.com/api";

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ─── Interceptor: إرسال التوكن مع كل طلب تلقائياً ───────────────────
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ─── Interceptor: التعامل مع أخطاء الاستجابة ────────────────────────
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("admin_token");
      window.location.href = "/admin-login";
    }
    return Promise.reject(error);
  }
);

// ═══════════════════════════════════════════════════════════════════════
//  Auth — تسجيل الدخول
// ═══════════════════════════════════════════════════════════════════════
export async function loginAdmin(username, password) {
  const response = await apiClient.post("/auth/login", { username, password });
  const { token } = response.data;
  if (token) {
    localStorage.setItem("admin_token", token);
  }
  return response.data;
}

export function logoutAdmin() {
  localStorage.removeItem("admin_token");
  window.location.href = "/admin-login";
}

export function isAuthenticated() {
  return !!localStorage.getItem("admin_token");
}

// ═══════════════════════════════════════════════════════════════════════
//  Beaches — إدارة الشواطئ
// ═══════════════════════════════════════════════════════════════════════
export async function getBeaches() {
  const response = await apiClient.get("/beaches");
  return response.data;
}

export async function getBeachById(id) {
  const response = await apiClient.get(`/beaches/${id}`);
  return response.data;
}

export async function addBeach(beachData) {
  const response = await apiClient.post("/beaches", beachData);
  return response.data;
}

export async function updateBeach(id, beachData) {
  const response = await apiClient.put(`/beaches/${id}`, beachData);
  return response.data;
}

export async function deleteBeach(id) {
  const response = await apiClient.delete(`/beaches/${id}`);
  return response.data;
}

// ═══════════════════════════════════════════════════════════════════════
//  Reservations — إدارة الحجوزات
// ═══════════════════════════════════════════════════════════════════════
export async function getReservations() {
  const response = await apiClient.get("/reservations");
  return response.data;
}

export async function getReservationById(id) {
  const response = await apiClient.get(`/reservations/${id}`);
  return response.data;
}

export async function getReservationByCode(code) {
  const response = await apiClient.get(`/reservations/verify/${code}`);
  return response.data;
}

export async function updateReservationStatus(id, status) {
  const response = await apiClient.patch(`/reservations/${id}/status`, {
    status,
  });
  return response.data;
}

// ═══════════════════════════════════════════════════════════════════════
//  Dashboard — لوحة التحكم
// ═══════════════════════════════════════════════════════════════════════
export async function getDashboardStats() {
  const response = await apiClient.get("/dashboard/stats");
  return response.data;
}

export default apiClient;
