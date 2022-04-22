import { createStore } from "redux";

import RootReducer from "./Redux/Reducer/RootReducer";

const store = createStore(RootReducer);

export default store;
