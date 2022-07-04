import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import theme from '@theme/index';
import PageRoutes from './routes';
import { isDev } from '@utils/index';

const ApplicationRouter = isDev() ? BrowserRouter : HashRouter;
// connect to graphql server
function App() {
  return (
    <ChakraProvider theme={theme}>
      <ApplicationRouter>
        <PageRoutes />
      </ApplicationRouter>
    </ChakraProvider>
  );
}

export default App;
