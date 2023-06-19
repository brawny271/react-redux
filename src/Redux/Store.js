
import { createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'

const Reducer = (state = 0, action) => {
    console.log(action)
    switch(action.type){
     case 'INCREMENT': return state + 1;
     case 'DECREMENT': return state - 1;
     default: return state;
 
    }
    
 }


export const Store = createStore(Reducer,composeWithDevTools())



