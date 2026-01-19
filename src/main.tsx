import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Providers from './providers/providers.tsx';
import { Analytics } from '@vercel/analytics/react';
import { injectSpeedInsights } from '@vercel/speed-insights';
 
injectSpeedInsights();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <App />

      {/* Analytics and Speed Insights */}
      <Analytics />
    </Providers>
  </StrictMode>
);
