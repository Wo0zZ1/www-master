import React from 'react';

// Routing
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Components & styles
import App from './App';
import './index.scss';

// State manager
import { Provider } from 'react-redux';
import { store } from './redux/store';

// DataBase
import './firebase';

// Vercel data
import { SpeedInsights } from '@vercel/speed-insights/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <SpeedInsights />
        </BrowserRouter>
    </Provider>,
);
