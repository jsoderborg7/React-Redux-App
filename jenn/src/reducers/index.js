import {FETCHING_CHARACTERS_START, FETCHING_CHARACTERS_SUCCESS} from '../actions';

const initialState = {
  name: null,
  role: null,
  house: null,
  isFetching: false,
  error: ''
  };


export const reducer = (state = initialState, action) =>{
  switch (action.type){
    case FETCHING_CHARACTERS_START:
      return{
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCHING_CHARACTERS_SUCCESS:
      console.log(action, "hello");
      return{
        ...state,
        name: action.payload.name,
        isFetching: false
      };
    default: 
      return state;
  }
};