// src/services/api.js

export const API_BASE_URL = "http://localhost:8080"; // Spring Boot base URL

// ✅ Common API function that auto-injects JWT token
export async function apiFetch(endpoint, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    ...(options.body instanceof FormData ? {} : { "Content-Type": "application/json" }),
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
  }

  if (!response.ok) {
    const errorText = await response.text();
    console.error("API Error:", errorText);
    throw new Error(`HTTP ${response.status} - ${errorText || response.statusText}`);
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    return response.json();
  }
  return null;
}

/* -------------------------------------------------------------------------- */
/*                                 📦 BATCH APIs                              */
/* -------------------------------------------------------------------------- */

export const getBatches = () => apiFetch("/api/batches");

export const createBatch = (name) =>
  apiFetch("/api/batches", {
    method: "POST",
    body: JSON.stringify({ name }),
  });

export const updateBatchName = (batchId, name) =>
  apiFetch(`/api/batches/${batchId}`, {
    method: "PUT",
    body: JSON.stringify({ name }),
  });

export const deleteBatch = (batchId) =>
  apiFetch(`/api/batches/${batchId}`, { method: "DELETE" });

export const initiatePayment = (batchId, paymentDetails) =>
  apiFetch(`/api/batches/${batchId}/initiate-payment`, {
    method: "POST",
    body: JSON.stringify(paymentDetails),
  });

/* -------------------------------------------------------------------------- */
/*                                👩‍💼 EMPLOYEE APIs                            */
/* -------------------------------------------------------------------------- */

export const getEmployees = () => apiFetch("/api/employees");

export const addEmployee = (employeeData) =>
  apiFetch("/api/employees", {
    method: "POST",
    body: JSON.stringify(employeeData),
  });

export const deleteEmployee = (employeeId) =>
  apiFetch(`/api/employees/${employeeId}`, { method: "DELETE" });

export const assignEmployeeToBatch = (employeeId, batchId) =>
  apiFetch(`/api/employees/${employeeId}/assign/${batchId}`, { method: "PUT" });

export const unassignEmployee = (employeeId) =>
  apiFetch(`/api/employees/${employeeId}/unassign`, { method: "PUT" });

export const bulkUploadEmployees = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return apiFetch("/api/employees/bulk-upload", {
    method: "POST",
    headers: {}, // browser sets multipart/form-data automatically
    body: formData,
  });
};

/* -------------------------------------------------------------------------- */
/*                               🏦 BANK APIs                                 */
/* -------------------------------------------------------------------------- */

export const getBankAccounts = () => apiFetch("/api/bank-accounts");

/* -------------------------------------------------------------------------- */
/*                              💰 PAYMENT APIs                               */
/* -------------------------------------------------------------------------- */

export const getPayments = () => apiFetch("/api/payments");

export const getPaymentById = (paymentId) =>
  apiFetch(`/api/payments/${paymentId}`);

export const processPayment = (paymentId, details) =>
  apiFetch(`/api/payments/${paymentId}/process`, {
    method: "POST",
    body: JSON.stringify(details),
  });
