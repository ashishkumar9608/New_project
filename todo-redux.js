const redux = require("redux");

// Actions
const ADD_TODO = "Add TODO";
const TOGGLE_TODO = "Toggle TODO";
const DELETE_TODO = "Delete TODO";
const EDIT_TODO = "Edit TODO";

// Action Creators
const addToDo = (text) => ({ type: ADD_TODO, text });
const toggleToDo = (index) => ({ type: TOGGLE_TODO, index });
const deleteToDo = (index) => ({ type: DELETE_TODO, index });
const editToDo = (index, text) => ({ type: EDIT_TODO, index, text });

// Initial State
const initialState = {
    todos: []
};

// Reducer
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) =>
                    i === action.index ? { ...todo, completed: !todo.completed } : todo
                )
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((_, i) => i !== action.index)
            };
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, i) =>
                    i === action.index ? { ...todo, text: action.text } : todo
                )
            };
        default:
            return state;
    }
}

// Create Store
const store = redux.createStore(todoReducer);

// Dispatch Actions
store.dispatch(addToDo("study at 8"));
store.dispatch(addToDo("study at 9"));
store.dispatch(addToDo("gym at 9"));
store.dispatch(toggleToDo(0));
store.dispatch(editToDo(1, "study at 10"));
store.dispatch(deleteToDo(2));

// Read Data from Store
console.log(store.getState());
