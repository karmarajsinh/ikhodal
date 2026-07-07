import { BrowserRouter } from 'react-router-dom';
import { AudioProvider } from './context/AudioContext';
import { AppRoutes } from './routes';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
      </BrowserRouter>
    </AudioProvider>
  );
}

export default App;
