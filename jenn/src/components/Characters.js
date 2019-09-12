import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCharacters} from '../actions';

const Characters = ({getCharacters, name, isFetching, error}) =>{
  useEffect(() =>{
    getCharacters();
  }, [getCharacters]);

  if (isFetching){
    return <h3>Getting characters!</h3>
  }

  return(
    <div>
      <h2>Name: {name}</h2>
    </div>
  );
};

const mapStateToProps = state =>{
  return{
    name: state.name,
    role: state.role,
    house: state.house,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {getCharacters})(Characters);