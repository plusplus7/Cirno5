import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppPage } from './pages/AppPage';

render(
    <BrowserRouter>
        <AppPage />
    </BrowserRouter>
, document.getElementById('root'));