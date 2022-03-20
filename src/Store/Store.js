import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootreducer } from "./reducer/RootReducer";

const store = createStore(rootreducer , {}, applyMiddleware(thunk))
export{store}