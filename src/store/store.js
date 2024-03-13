import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import {taskReducer} from './reducers/taskReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const reducer = combineReducers({
    uri:taskReducer
});

const middleware = [thunk];

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
    let store = createStore(persistedReducer,{},applyMiddleware(...middleware));
    let persistor = persistStore(store);
    return {store, persistor};
}