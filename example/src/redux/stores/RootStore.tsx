

//redux related
import {createStore } from 'redux';
import rootReducer from '../reducers/RootReducer';



const store = createStore(
    rootReducer,
    //other middleware
);



export default store;