import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App.tsx';
import Providers from './providers/providers.tsx';
import Footer from './components/footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <div className="container mx-auto mt-5 mb-6 md:mt-10 px-3">
        <App />
        <Footer />
      </div>
    </Providers>
  </StrictMode>
);
