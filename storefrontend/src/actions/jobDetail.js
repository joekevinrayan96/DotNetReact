import api from "./api"



export const ACTION_TYPES = {
    CREATE:'CREATE',
    FETCH_ALL:'FETCH_ALL' 
}

export const fetchall = () => dispatch => {
    api.jobDetail().fetchAll()
    .then(response => {
        dispatch({
            type:ACTION_TYPES.FETCH_ALL,
            payload:response.data
    })
    //...
   
    })
    .catch(err => console.log(err))
}

export const create = (data, onSuccess) => dispatch => {
    //data = formateData(data)
    api.jobDetail().create(data)
        .then(res => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: res.data
            })
            onSuccess()
        })
        .catch(err => console.log(err))
}