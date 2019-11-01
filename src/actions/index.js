import jsonPlaceHolder from '../api/jsonPlaceHolder'

export const fetchPost =  () => {
    return async function(dispatch, getState ) {
        const responce = await  jsonPlaceHolder.get('/posts');

        dispatch({type:'FETCH_POST', payload:responce })
    }
    
};