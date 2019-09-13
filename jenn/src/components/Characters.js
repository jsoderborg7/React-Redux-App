import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCharacters} from '../actions';
import CharacterCard from './CharacterCard';

const Characters = ({getCharacters, name, isFetching, error}) =>{
  useEffect(() =>{
    getCharacters();
  }, [getCharacters]);

  if (isFetching){
    return <h3>Getting characters!</h3>
  }

  return(
    <div className="characterContainer">
        {name && name.map(item => (
          <CharacterCard name={item.name} house={item.house} role={item.role} />
        ))}
    </div>
  );
};

const mapStateToProps = state =>{
  console.log('mSTP', state);
  return{
    name: state.name,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, {getCharacters})(Characters);