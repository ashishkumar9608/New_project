const redux = require("redux");

//Action

const ADD_TODO = "ADD";
const TOGGLE = "toggle";

// Action creater

const add = (text) =>{
   type:ADD_TODO,
   text
};

const toggle = (index) => {
    type:TOGGLE,
    index
}


const initialState = {
    todos:[]
}


//reducer 

function reducer(state=initialState,action){
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                 todos:[
                        ...state.todos,{
                          text:action.text,
                          completed:false
                        }
                    ]
                
            }
        case TOGGLE:
            return{
                ...state,
                todos:state.todos.map((todo,index)=>{
                    if(index===action.index){
                        return {...todos,completed:!completed}
                    }
                    else{
                        return todos;
                    }
                })
            }    

    }

}