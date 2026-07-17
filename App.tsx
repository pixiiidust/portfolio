import React from 'react';
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import Ticker from './components/Ticker';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CaseStudyDetail from './pages/CaseStudyDetail';
import ProjectDetail from './pages/ProjectDetail';
import NotFoundPage from './pages/NotFoundPage';
import { CASE_STUDIES, PROJECTS } from './constants';

const RouteEffects: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        target?.scrollIntoView({ block: 'start' });
        target?.focus({ preventScroll: true });
        return;
      }

      window.scrollTo({ top: 0, left: 0 });
      document.querySelector<HTMLElement>('main')?.focus({ preventScroll: true });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.hash]);

  React.useEffect(() => {
    const slug = location.pathname.split('/').filter(Boolean).at(-1);
    const item = location.pathname.startsWith('/work/')
      ? CASE_STUDIES.find((study) => study.slug === slug)
      : location.pathname.startsWith('/projects/')
        ? PROJECTS.find((project) => project.slug === slug)
        : undefined;
    const itemTitle = item && 'detailTitle' in item && item.detailTitle
      ? item.detailTitle
      : item?.title;

    document.title = itemTitle
      ? `${itemTitle} | Jamie Sim`
      : location.pathname === '/about'
        ? 'About | Jamie Sim'
        : location.pathname === '/'
          ? 'Jamie Sim | Product Manager'
          : 'Page Not Found | Jamie Sim';
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <RouteEffects />
      <div className="bg-white border-[3px] md:border-[6px] border-black w-full shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] md:shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] flex flex-col relative">
        <div className="absolute top-0 right-0 w-10 h-10 md:w-12 md:h-12 bg-black clip-triangle pointer-events-none z-[101]"></div>

        <Ticker />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work/:slug" element={<CaseStudyDetail />} />
          <Route path="/projects/lky-brain" element={<Navigate to="/projects/lky-avatar" replace />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <div className="border-t-4 border-black p-2 flex justify-between items-center text-xs font-semibold uppercase tracking-widest bg-white">
          <span>STATUS: ONLINE</span>
          <span>SYS_VER: 2.1.0</span>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
