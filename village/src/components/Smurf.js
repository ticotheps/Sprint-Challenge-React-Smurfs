import React from 'react';

const Smurf = props => {
  return (
    <div className="smurf-card">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={e => props.deleteSmurf(e, props.smurf)} className="delete-button">Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

