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
      return{
        ...state,
        name: action.payload,
        role: action.payload,
        house: action.payload,
        isFetching: false
      };
    default: 
      return state;
  }
};