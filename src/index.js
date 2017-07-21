import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './components/App.jsx';

const store = configureStore();

store.subscribe(() => {
    console.log(store.getState(), '<======== subscribe state');
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
