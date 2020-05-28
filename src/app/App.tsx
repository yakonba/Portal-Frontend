import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import { Routes } from '../routes';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Routes></Routes>
        </Provider>
    );
};

export default App;
