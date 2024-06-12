const redux = require("redux");

// Action Types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action Creators
const increment = (num) => {
    return { type: INCREMENT, num };
};

const decrement = (num) => {
    return { type: DECREMENT, num };
};

const initialState = {
    count: 0
};

// Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + action.num };
        case DECREMENT:
            return { ...state, count: state.count - action.num };
        default:
            return state;
    }
}

const store = redux.createStore(reducer);

// Dispatch actions
store.dispatch(increment(9));
store.dispatch(increment(10));

// Read data from store
console.log(store.getState());
