/**
 * BASE ADMIN
 * https://komutteknolojisi.com
 *
 * @author Goncanur Uz <goncanur@komutteknolojisi.com>
 * @format
 * @flow strict-local
 */

import createSagaMiddleware from '@redux-saga/core';
import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import {persistReducer} from 'redux-persist';
import rootReducers from './reducers';
import rootSaga from './sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';

//SAGA Middleware TANIMLAMASI

const sagaMiddleware = createSagaMiddleware();

//PERSIST TANIMLAMASI

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
//REDUX STORE TANIMLAMASI
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware as any),
});
sagaMiddleware.run(rootSaga);

export default store;

//ROOT STATE, Global state in type ını tanımlamak için kullanıyoruz.
//Return Type typescript üzerinde tip döndüren özellik
export type RootState = ReturnType<typeof store.getState>;

//Hook ları type lı hallerini tanımlıyoruz
//Örneğin;
//const todos=useSelector((state:Type)=> states.todos )
//useAppSelector tip verdiğimizde burada state de tip vermemize gerek kalmayacak zaten tanımlamış olacağız
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); //
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //
