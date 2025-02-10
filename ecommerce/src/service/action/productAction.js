import axios from 'axios';

const getAllData = (data) => {
    return {
        type: "GET_ALL_DATA",
        payload: data
    }
}
const viewData = (data) => {
    return {
        type: "VIEW_DATA",
        payload: data
    }
}
const Addcard = (data) => {
    return {
        type: "ADD_TO_CARD",
        payload: data
    }
}

export const getAllDataAsync = () => {
    return (dispatch) => {
        axios.get("https://dummyjson.com/products")
            .then((res) => {
                dispatch(getAllData(res.data.products));
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
export const viewDataAsync = (id) => {
    return dispatch => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                dispatch(viewData(res.data))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}
export const AddProductAsync = (id) => {
    return dispatch => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                dispatch(Addcard(res.data))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}