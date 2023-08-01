import { createStore } from "redux";
import rootRecducer from "./rootReducer";



const store = createStore(rootRecducer);


export default store;