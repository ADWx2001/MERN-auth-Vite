import { combineReducers,configureStore} from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';


const rootReudcer = combineReducers({user: userReducer});

const persistConfig={
    key:'root',
    version:1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReudcer)


export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck:false,
    }),
});

export const persistor = persistStore(store);