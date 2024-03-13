import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import {taskReducer} from './reducers/taskReducer';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

// identifies the state 
const reducer = combineReducers({
    uri:taskReducer
});

// middleware is in array format
const middleware = [thunk];

//persistency store datas
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