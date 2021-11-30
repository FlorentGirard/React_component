//import npm
import { createStore, /*applyMiddleware,*/ compose } from "redux";
import reducer from "../reducers";

//Middelware
//import apiMiddleware from "../middlewares/api";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// attention à bien brancher le middleware sur le store
// pour qu'il soit utilisé
const enhancers = composeEnhancers(/*applyMiddleware(apiMiddleware)*/);

const store = createStore(reducer, enhancers);

export default store;
