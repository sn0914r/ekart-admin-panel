/**
 * Application Route Paths & Titles Configuration
 */

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/",
  PRODUCTS: "/products",
  ORDERS: "/orders",
  USERS: "/users",
  ANALYTICS: "/analytics",
  LOGIN: "/auth/login",
  FORBIDDEN: "/forbidden",
};

export const APP_BASE_TITLE = "eKart Admin";

/**
 * Route matching list ordered by priority.
 */
export const ROUTE_TITLE_MAP = [
  { match: (path) => path === "/" || path === "", title: "Dashboard" },
  { match: (path) => path.startsWith("/products"), title: "Products" },
  { match: (path) => path.startsWith("/orders"), title: "Orders" },
  { match: (path) => path.startsWith("/users"), title: "Users" },
  { match: (path) => path.startsWith("/analytics"), title: "Analytics" },
  { match: (path) => path.startsWith("/auth/login") || path.startsWith("/auth"), title: "Login" },
  { match: (path) => path.startsWith("/forbidden"), title: "Access Forbidden" },
];

/**
 * Resolves view title for a given pathname
 * @param {string} pathname
 * @returns {string} View title
 */
export const getPageTitle = (pathname = "") => {
  const matched = ROUTE_TITLE_MAP.find((item) => item.match(pathname));
  return matched ? matched.title : "Not Found";
};

/**
 * Formats full document title for browser tab
 * @param {string} title
 * @returns {string}
 */
export const formatDocumentTitle = (title) => {
  if (!title) return APP_BASE_TITLE;
  return `${title} | ${APP_BASE_TITLE}`;
};
