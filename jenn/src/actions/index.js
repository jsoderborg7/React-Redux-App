import axios from 'axios';

export const FETCHING_CHARACTERS_START = 'FETCHING_CHARACTERS_START';
export const FETCHING_CHARACTERS_SUCCESS = 'FETCHING_CHARACTERS_SUCCESS';
export const FETCHING_CHARACTERS_FAILURE = 'FETCHING_CHARACTERS_FAILURE';

export const getCharacters = () => dispatch =>{
  dispatch({type: FETCHING_CHARACTERS_START});
  axios
    .get(`https://www.potterapi.com/v1/characters?key=$2a$10$ekPmPU5qEWWPpz2mnwKHXeJl2y5mpwu6cYbsdr0Xf/w9LRRTPNKl.`)
    .then(res =>{
      console.log(res);
      dispatch({type: FETCHING_CHARACTERS_SUCCESS, payload: res.data.characters});
    })
    .catch(err =>{
      dispatch({type: FETCHING_CHARACTERS_FAILURE, payload: `${err.response.message} code: ${err.response.code}`});
    });
};