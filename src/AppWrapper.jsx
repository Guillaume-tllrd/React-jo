import React from 'react';
import App from './App';
import { AppProvider } from "./components/AppContext.jsx"

const AppWrapper = () => {
    return (
        <AppProvider>
            <App/>
        </AppProvider>
        
    );
};

export default AppWrapper;