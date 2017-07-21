import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const configureStore = (initialState) => {
    const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

    if (module.hot) {
        module.hot.accept('../reducers', () => store.replaceReducer(reducers))
    }

    return store;
}