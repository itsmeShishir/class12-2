import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import INcDEcContext from './learn/ContextApi/INcDEcContext.jsx';
import LightAndDark from './learn/ContextApi/LightAndDark.jsx';
import ToDoContext from './learn/ContextApi/ToDoContext.jsx';
import { Provider } from "react-redux";
import { store } from './learn/Redux/store.js';

const clients = new QueryClient()
createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
    <LightAndDark>
      <ToDoContext >
        <QueryClientProvider client={clients}>
          <INcDEcContext >
          <BrowserRouter>
            <App />
          </BrowserRouter>
          </INcDEcContext>
        </QueryClientProvider>
      </ToDoContext >
    </LightAndDark>
  </Provider>
)
