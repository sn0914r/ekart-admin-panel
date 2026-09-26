import { useEffect } from "react";
import { formatDocumentTitle, APP_BASE_TITLE } from "@constants/routes";

/**
 * Custom hook to dynamically set document title.
 * Restores previous document title when unmounted unless retainOnUnmount is true.
 *
 * @param {string} title - The title to display (e.g. "Products")
 * @param {boolean} [retainOnUnmount=false] - Whether to keep the title upon component unmount
 */
export const useDocumentTitle = (title, retainOnUnmount = false) => {
  useEffect(() => {
    if (!title) return;

    const previousTitle = document.title;
    document.title = formatDocumentTitle(title);

    return () => {
      if (!retainOnUnmount) {
        document.title = previousTitle || APP_BASE_TITLE;
      }
    };
  }, [title, retainOnUnmount]);
};

export default useDocumentTitle;
