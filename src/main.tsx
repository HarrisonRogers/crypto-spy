import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/App.tsx';
import Providers from './providers/providers.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <div className="container mx-auto mt-5 mb-10 md:my-10">
        <App />
      </div>
    </Providers>
  </StrictMode>
);
