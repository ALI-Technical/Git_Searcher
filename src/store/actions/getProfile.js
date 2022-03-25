import axios from 'axios';
import ActionTypes from '../constants'

const getProfile = (userName) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.GET_GITHUB_PROFILE_LOADING,
        });

        const searchValue = userName ? userName : 'example';

        axios
        .get(`https://api.github.com/users/${searchValue}`)
        .then((res) =>{
            // console.log(res);
        dispatch({
          type: ActionTypes.GET_GITHUB_PROFILE,
          payload: res.data,
        })
      })
      .catch( (error) => {
        dispatch({
          type: ActionTypes.GET_GITHUB_PROFILE_ERROR,
          payload: error.message,
        })
      } )

    }
}

export {getProfile};