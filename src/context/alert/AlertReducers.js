const githubReducer = (state, action) => {
    switch (action.type) {
        case "SET_ALERT":
            return {
                ...state,
                message: action.payload.message,
                type: action.payload.type,
            };
        case "CLEAR_ALERT":
            return { ...state, message: "", type: null };
        default:
            return state;
    }
};

export default githubReducer;
