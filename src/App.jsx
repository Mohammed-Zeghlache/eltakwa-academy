import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import News from "./pages/News.jsx";
import Quran from "./pages/Quran.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Sessions from "./pages/Sessions.jsx";
import SessionDetails from "./pages/SessionDetails.jsx";
import Registration from "./pages/Registration.jsx";
import Feedback from "./pages/Feedback.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:category" element={<Courses />} />
        <Route path="/course/:slug" element={<CourseDetails />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/sessions-list" element={<Sessions />} />
        <Route path="/session/:slug" element={<SessionDetails />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}