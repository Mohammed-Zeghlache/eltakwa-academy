import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import Home from "./pages/Home.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import SessionDetails from "./pages/SessionDetails.jsx";
import Announcement from "./pages/Announcement.jsx";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<MainLayout />}>
          {/* All these paths render Home and scroll to their section */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/news" element={<Home />} />
          <Route path="/quran" element={<Home />} />
          <Route path="/courses" element={<Home />} />
          <Route path="/courses/:category" element={<Home />} />
          <Route path="/sessions" element={<Home />} />
          <Route path="/sessions-list" element={<Home />} />
          <Route path="/registration" element={<Home />} />
          <Route path="/feedback" element={<Home />} />
          <Route path="/contact" element={<Home />} />

          {/* Dedicated pages */}
          <Route path="/course/:slug" element={<CourseDetails />} />
          <Route path="/session/:slug" element={<SessionDetails />} />
          <Route path="/announcement/:slug" element={<Announcement />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}
