import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Providers from './providers/providers.tsx';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />

      {/* Analytics and Speed Insights */}
      <Analytics />
      <SpeedInsights />
    </Providers>
  </StrictMode>
);
