import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Providers from './providers/providers.tsx';
import Footer from './components/footer.tsx';
import { Analytics } from '@vercel/analytics/next';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <Analytics />
      <div className="max-w-[1400px] mx-auto mt-5 md:mt-10 h-[calc(100vh-40px)] flex flex-col justify-between">
        <App />
        <Footer />
      </div>
    </Providers>
  </StrictMode>
);
