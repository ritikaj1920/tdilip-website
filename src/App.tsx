import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/atoms/loader";
import Header from "./components/organisms/header";
import Footer from "./components/organisms/footer";
import ScrollToTop from "./components/atoms/scroll-to-top";

const HomePage = lazy(() => import("./pages/home"));
const CoachPage = lazy(() => import("./pages/coach"));
const GalleryPage = lazy(() => import("./pages/gallery"));
const PartnersPage = lazy(() => import("./pages/partners"));
const QnAPage = lazy(() => import("./pages/qna"));
const SubmitVideoPage = lazy(() => import("./pages/submit-video"));
const HelpingHandsPage = lazy(() => import("./pages/helping-hands"));
const BlogDetailPage = lazy(() => import("./pages/blog-detail"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Loader isLoading={loading} />
      {!loading && (
        <>
          <ScrollToTop />
          <Header />
          <main>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/coach" element={<CoachPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/qna" element={<QnAPage />} />
                <Route path="/submit-video" element={<SubmitVideoPage />} />
                <Route path="/helping-hands" element={<HelpingHandsPage />} />
                <Route
                  path="/helping-hands/:slug"
                  element={<BlogDetailPage />}
                />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}
