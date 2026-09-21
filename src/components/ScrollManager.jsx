import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

/* Map each path prefix to a section id in Home.jsx */
const SECTION_MAP = {
  "/about": "about",
  "/news": "news",
  "/quran": "quran",
  "/courses": "courses",
  "/sessions": "sessions",
  "/sessions-list": "sessions-grid",
  "/registration": "registration",
  "/feedback": "feedback",
  "/contact": "contact",
};

export default function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Detail pages → scroll to top
    if (
      pathname.startsWith("/course/") ||
      pathname.startsWith("/session/") ||
      pathname.startsWith("/announcement/")
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Home → scroll to top
    if (pathname === "/" || pathname === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Section routes → scroll to their section
    // Strip trailing slash and any sub-segment (e.g. /courses/craft → /courses)
    const key = "/" + pathname.split("/")[1];
    const sectionId = SECTION_MAP[key];
    if (!sectionId) return;

    // Wait for the DOM to render before scrolling
    const tryScroll = (attempt = 0) => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempt < 10) {
        // Retry up to 10 times (total ~500ms) in case Home is still rendering
        setTimeout(() => tryScroll(attempt + 1), 50);
      }
    };
    setTimeout(() => tryScroll(), 30);
  }, [pathname]);

  return null;
}
