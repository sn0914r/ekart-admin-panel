import { logger } from "../utils/logger";
import { auth } from "./firebase";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const request = async (endpoint, options = {}) => {
  try {
    await auth.authStateReady();
    const user = auth.currentUser;
    let token = null;
    if (user) {
      token = await user.getIdToken();
      logger.info("Auth token acquired:" + (token ? "Yes" : "No"));
    } else {
      logger.info("No user found in auth state.");
    }

    const headers = {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    };

    if (!(options.body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const result = await response.json();

    if (!response.ok || result.success === false) {
      const error = new Error(result.message || "Something went wrong");

      error.code = result.errorCode || "UNKNOWN_ERROR";
      error.validationErrors = result.errors || null;
      error.status = response.status;

      throw error;
    }
    logger.info("api response data", result.data);

    return {
      data: result.data,
      meta: result.meta || null,
      message: result.message,
    };
  } catch (err) {
    if (!(err instanceof Error)) {
      const networkError = new Error("Network error. Please try again.");
      networkError.code = "NETWORK_ERROR";
      networkError.validationErrors = null;
      networkError.status = 500;
      throw networkError;
    }

    throw err;
  }
};

export default {
  get: (endpoint) => request(endpoint, { method: "GET" }),
  post: (endpoint, body) =>
    request(endpoint, {
      method: "POST",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  put: (endpoint, body) =>
    request(endpoint, {
      method: "PUT",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  patch: (endpoint, body) =>
    request(endpoint, {
      method: "PATCH",
      body: body instanceof FormData ? body : JSON.stringify(body),
    }),
  delete: (endpoint) => request(endpoint, { method: "DELETE" }),
};
