const initalState = {
    products: [],
    viewdata: [],
    Addcard: [],
}

export const productReducer = (state = initalState, action) => {
    switch (action.type) {
        case "GET_ALL_DATA":
            return {
                ...state,
                products: action.payload
            }
        case "VIEW_DATA":
            return {
                ...state,
                viewdata: action.payload
            }
        case "ADD_TO_CARD":
            console.log(action.payload);
            return {
                ...state,
                Addcard: action.payload
            }
        default:
            return state
    }
};