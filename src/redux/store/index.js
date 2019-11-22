import reducers from "../reducers";
import sagas from "../sagas";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import { createStore, applyMiddleware, compose } from "redux";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

const store = createStore(reducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;