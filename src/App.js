import React from 'react';
import './App.css';
import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <Posts />
            </div>
        </Provider>

    );
};

export default App
