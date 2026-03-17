import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/consultation/ConsultationModal';
import { ConsultationProvider } from './context/ConsultationContext';
import { Toaster } from './components/ui/sonner';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { ScrollToTopButton } from './components/ui/ScrollToTopButton';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <ConsultationProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <Outlet />
          <Footer />
          <ConsultationModal />
          <Toaster />
        </div>
      </ConsultationProvider>
      <ScrollToTopButton />
    </>
  );
}
