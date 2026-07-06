import { BrowserRouter } from 'react-router-dom';
import { AudioProvider } from './context/AudioContext';
import { AppRoutes } from './routes';

function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AudioProvider>
  );
}

export default App;
