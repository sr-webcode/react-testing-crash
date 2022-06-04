import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import PageRoutes from './routes';
import { isDev } from '@utils/index';

console.log(isDev());
const ApplicationRouter = isDev() ? BrowserRouter : HashRouter;

function App() {
  return (
    <ApplicationRouter>
      <PageRoutes />
    </ApplicationRouter>
  );
}

export default App;
