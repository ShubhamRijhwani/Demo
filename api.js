// src/services/api.js
export const API_BASE_URL = "http://localhost:8080";

// Universal Fetch Helper
export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    ...(options.body instanceof FormData
      ? {}
      : { "Content-Type": "application/json" }),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (response.status === 401) {
    console.warn("Session expired or invalid token");
    localStorage.removeItem("token");
    window.location.href = "/";
    return;
  }

  if (response.status === 204) return null;

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

// ----------------------
// AUTH APIs (Your part)
// ----------------------
export const loginUser = (data) =>
  apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const fetchSecurityQuestions = () =>
  apiFetch("/api/auth/security-questions", { method: "GET" });

export const verifyUserDetails = (data) =>
  apiFetch("/api/auth/verify", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const resetPassword = (data) =>
  apiFetch("/api/auth/reset-password", {
    method: "POST",
    body: JSON.stringify(data),
  });

// ----------------------
// OTHER MODULES (Teammate)
// ----------------------
export const getBatches = () => apiFetch("/api/batches", { method: "GET" });

export const createBatch = (name) =>
  apiFetch("/api/batches", {
    method: "POST",
    body: JSON.stringify({ name }),
  });

export const getEmployees = () =>
  apiFetch("/api/employees", { method: "GET" });

export const addEmployee = (data) =>
  apiFetch("/api/employees", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const bulkUploadEmployees = (file) => {
  const formData = new FormData();
  formData.append("file", file);
  return apiFetch("/api/employees/bulk-upload", {
    method: "POST",
    body: formData,
  });
};

export const getBankAccounts = () =>
  apiFetch("/api/bank-accounts", { method: "GET" });
