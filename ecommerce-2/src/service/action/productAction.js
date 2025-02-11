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
export const AddProductAsync = (id, qty) => {
    return async dispatch => {
        let product = await axios.get(`https://dummyjson.com/products/${id}`)
        let cartIem = { ...product.data, quantity: qty }
        axios.post("http://localhost:3000/carts", cartIem)
    }
}
export const cartAllDataAsync = () => {
    return dispatch => {
        axios.get('http://localhost:3000/carts')
            .then((res) => {
                dispatch(Addcard(res.data))
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
    export const RemoveDataAsync = (id) => {
        return dispatch => {
            axios.delete(`http://localhost:3000/carts/${id}`)
            .then((res) => {
                dispatch(cartAllDataAsync());
            })
            .catch((err) => {
                console.log(err);
            });
    }
}
