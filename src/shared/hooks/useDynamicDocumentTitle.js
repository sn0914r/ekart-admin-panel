import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageTitle, formatDocumentTitle } from "@constants/routes";

/**
 * Custom hook to automatically synchronize document.title with the active route.
 */
export const useDynamicDocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = getPageTitle(location.pathname);
    document.title = formatDocumentTitle(pageTitle);
  }, [location.pathname]);
};

export default useDynamicDocumentTitle;
