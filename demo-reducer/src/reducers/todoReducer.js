
export const initialState = {
    todos: [
        { id: new Date().getTime(), name: "Estudiar para el control", }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case "add": {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {

                        id: new Date().getTime(),
                        name: action.payload.name,
                    }
                ]
            };
        }
        default: {
            return state;
        }
    }
}