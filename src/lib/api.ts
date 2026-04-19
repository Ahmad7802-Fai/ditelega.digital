const API_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * 🔥 Base Fetch Wrapper
 */
async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_URL}${endpoint}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  // 🔥 handle error global
  if (!res.ok) {
    let errorMessage = "Terjadi kesalahan";

    try {
      const err = await res.json();
      errorMessage = err.message || errorMessage;
    } catch {}

    throw new Error(errorMessage);
  }

  return res.json();
}

/**
 * =========================
 * 📥 LEADS API
 * =========================
 */

export type LeadPayload = {
  name: string;
  phone: string;
  message?: string;
};

export async function sendLead(data: LeadPayload) {
  return request("/leads", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

/**
 * =========================
 * 🧪 HEALTH CHECK
 * =========================
 */

export async function checkHealth() {
  return request("/health");
}

/**
 * =========================
 * 🔥 GENERIC METHODS (optional future)
 * =========================
 */

export const api = {
  get: <T>(endpoint: string) =>
    request<T>(endpoint, { method: "GET" }),

  post: <T>(endpoint: string, body: any) =>
    request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    }),

  put: <T>(endpoint: string, body: any) =>
    request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(body),
    }),

  delete: <T>(endpoint: string) =>
    request<T>(endpoint, { method: "DELETE" }),
};

export function getWhatsAppLink(customMessage?: string) {
  const phone = process.env.NEXT_PUBLIC_WA_NUMBER;

  const defaultMessage =
    process.env.NEXT_PUBLIC_WA_MESSAGE ||
    "Halo, saya tertarik dengan layanan Anda";

  const text = customMessage || defaultMessage;

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}