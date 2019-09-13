import {FETCHING_CHARACTERS_START, FETCHING_CHARACTERS_SUCCESS} from '../actions';

const initialState = {
  name: null,
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
      console.log(action.payload, "hello");
      return{
        ...state,
        name: action.payload,
        isFetching: false
      };
    default: 
      return state;
  }
};